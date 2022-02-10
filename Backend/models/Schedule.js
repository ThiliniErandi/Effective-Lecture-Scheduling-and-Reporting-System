const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scheduleSchema = new Schema ({
    
    schedule_id : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    },
    lecturer_id : {
        type : String,
        required : true
    },
    rep_id : {
        type : String,
        required : true
    },
})

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;