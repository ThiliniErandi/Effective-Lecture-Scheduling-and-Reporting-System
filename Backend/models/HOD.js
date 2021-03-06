const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hodSchema = new Schema ({
    
    hod_id : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    course_id : {
        type : Object,
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

const HOD = mongoose.model("HOD", hodSchema);

module.exports = HOD;