const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lecturerSchema = new Schema ({
    
    lecturer_id : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    courses : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    designation : {
        type : String,
        required : true
    },
    user_id : {
        type : String,
        required : true
    },
})

const Lecturer = mongoose.model("Lecturer", lecturerSchema);

module.exports = Lecturer;