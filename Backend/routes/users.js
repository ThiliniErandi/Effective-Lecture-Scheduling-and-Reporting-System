const router = require('express').Router();
let User = require('../models/User');
const jwt = require('jsonwebtoken');
const { checkUser } = require('./Authentication');

const screte_key = process.env.SECRETE_KEY

const createToken = (id, email) => {
    return jwt.sign({ id, email }, screte_key, {
        expiresIn: 60 * 60
    })
}

const handdleErrors = (err) => {
    let errors = { email: "", password: "" }

    if (err.code === 11000) {
        errors.email = "This Email is Already Registered!"
        return errors;
    }
    if (err === "Incorrect Email!") {
        errors.email = err
    } else if (err === "Incorrect password!") {
        errors.password = err
    }


    return errors;
}

//create users
router.post('/add', async (req, res) => {

    const { user_name, password, email, user_type } = req.body;

    try {
        const new_user = await User.create({ user_name, password, email, user_type })
        res.send({ msg: "User Created!", user: new_user })

    } catch (err) {
        console.log(err)
        const { errors } = handdleErrors(err)
        res.json({ errors, status: "Falid!" });
    }

})


//Login users
router.post('/login', async (req, res) => {

    const { email, password } = req.body;

    try {
        const new_user = await User.login(email, password)
        if (new_user) {
            const token = createToken(new_user._id, new_user.email)
            res.cookie("jwt", token, {
                withCrdentials: true,
                httpOnly: false,
                maxAge: 60 * 60 * 1000
            })
            res.send({ msg: "User Logged!", user: new_user })
        }

    } catch (err) {
        console.log(err)
        const errors = handdleErrors(err)
        res.send({ errors, status: "Login Failed!" });
    }

})


//view users
router.post("/view", checkUser, (req, res) => {
    User.find().then((users) => {
        res.json(users)

    }).catch((err) => {
        console.log(err)
    })
})

//update users
router.put("/update/:userId", async (req, res) => {
    let user_id = req.params.userId;
    const { user_name, password, user_type, email } = req.body;

    const updateUser = {
        // user_id, 
        user_name,
        password,
        user_type,
        email
    }

    const update = await User.findByIdAndUpdate(user_id, updateUser)
        .then(() => {
            res.status(200).send({ status: "user updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })
})

//delete users
router.delete("/delete/:userId", async (req, res) => {
    let user_id = req.params.userId;
    await User.findByIdAndDelete(user_id)
        .then(() => {
            res.status(200).send({ status: "User deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete user", error: err.message });
        })
})

//one user details view
router.get("/get/:userId", async (req, res) => {
    let user_id = req.params.userId;
    // await User.findOne(title)
    const user = await User.findById(user_id)
        .then((user) => {
            res.status(200).send({ status: "User fetched", user });
        }).catch((err) => {
            // console.log(err.message);
            res.status(500).send({ status: "Error with get user", error: err.message });
        })
})

module.exports = router;