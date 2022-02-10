const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  
    user_name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
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
    email : {
        type: String,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }

})

const User = mongoose.model("User", userSchema);

module.exports = User;