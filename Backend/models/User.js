const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  
    // user_id : {
    //     type : String,
    //     required : true
    // },
    user_name : {
        type : String,
        unique: true,
        required : true,
        trim: true
    },
    password : {
        type : String,
        required : true,
        trim: true,
        minilength: 8
    },
    email : {
        type: String,
        unique: true,
        required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    user_type : {
        type: [
                "admin",
                "dean",
                "depHead",
                "lecturer",
                "student"
              ],
        required : true,
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

const User = mongoose.model("User", userSchema);

module.exports = User;