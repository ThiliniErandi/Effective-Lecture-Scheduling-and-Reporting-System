const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scheduleSchema = new Schema ({
    
    schedule_id : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    time : {
        type : new Date().getTime(),
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