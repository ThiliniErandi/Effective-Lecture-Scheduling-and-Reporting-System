const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const timetableSchema = new Schema ({
    
    timetable_id : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
})

const Timetable = mongoose.model("Timetable", timetableSchema);

module.exports = Timetable;