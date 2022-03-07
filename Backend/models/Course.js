const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema ({
    
    course_id : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
})

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;