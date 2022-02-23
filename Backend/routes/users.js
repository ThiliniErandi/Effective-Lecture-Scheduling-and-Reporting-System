const router = require('express').Router();
let User = require('../models/User');

//create users
router.route("/add").post((req, res) => {
        // const user_id = req.body.user_id;
        const user_name = req.body.user_name;
        const password = req.body.password;
        const email = req.body.email;
        const user_type = req.body.user_type;
    
        const newUser = new User({
            // user_id, 
            user_name, 
            password,
            email, 
            user_type 
        })
        
        //passing data to the db
        newUser.save().then(()=>{
            res.json("User Added")
        }).catch(()=>{
            // console.log(err);
        })
    })

//view users
router.route("/view").get((req, res)=>{
    User.find().then((users)=>{
        res.json(users)
    }).catch(()=>{
        console.log(err)
    })
})

//update users
router.route("/update/:userId").put(async(req, res)=>{
    let user_id = req.params.userId;
    const { user_name, password, user_type, email } = req.body;

    const updateUser = {
        // user_id, 
        user_name, 
        password, 
        user_type, 
        email
    }

    const update = await User.findByIdAndUpdate( user_id, updateUser )
    .then(() => {
        res.status(200).send({status: "user updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    }) 
})

//delete users
router.route("/delete/:userId").delete(async(req,res) => {
    let user_id = req.params.userId;
    await User.findByIdAndDelete(user_id)
    .then(()=> {
        res.status(200).send({status: "User deleted"});   
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

//one user details view
router.route("/get/:userId").get(async(req, res)=> {
    let user_id = req.params.userId;
    // await User.findOne(title)
    const user = await User.findById(user_id)
    .then((user) => {
        res.status(200).send({status: "User fetched", user });
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message });
    })
})

module.exports = router;