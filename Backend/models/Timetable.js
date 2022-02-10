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
    user_id : {
        type : String,
        required : true
    },
    batch : {
        type : Object["1", "2", "3", "4"],
        required : true
    },
    department: {
        type : Object["CIS", "FST", "NR", "PST", "SM"],
        required : true
    }
})

const Timetable = mongoose.model("Timetable", timetableSchema);

module.exports = Timetable;