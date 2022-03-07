const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentBatchRepresentativeSchema = new Schema ({
    
    rep_id : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    dep_id : {
        type : String,
        required : true
    },
    batch_id : {
        type : String,
        required : true
    },
    course_id : {
        type : String,
        required : true
    },
    user_id : {
        type : String,
        required : true
    }
})

const StudentBatchRepresentative = mongoose.model("StudentBatchRepresentative", studentBatchRepresentativeSchema);

module.exports = StudentBatchRepresentative;