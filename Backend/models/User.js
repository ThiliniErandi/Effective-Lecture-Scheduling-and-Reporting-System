const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    // user_id : {
    //     type : String,
    //     required : true
    // },
    user_name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minilength: 8
    },
    email: {
        type: String,
        unique: true,
        required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    user_type: {
        type: String,
        enum: ['Admin', 'HOD', 'Dean', 'Lecturer', 'Student'],
        default: "Student",
        required: true,
    },
    // tokens : [{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }],
    // },
    // timestamps : true

});

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

userSchema.pre('findOneAndUpdate', async function (next) {
    const userToUpdate = await this.model.findOne(this.getQuery())

    if (userToUpdate.password !== this._update.password) {
        this._update.password = await bcrypt.hash(this._update.password, 12)
    }
    next();
})

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user;
        }
        throw Error("Incorrect password!");
    }
    throw Error("Incorrect Email!")
}

const User = mongoose.model("User", userSchema);

module.exports = User;