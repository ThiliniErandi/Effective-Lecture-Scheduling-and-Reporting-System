const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stu_Batch_RepSchema = new Schema ({
    
    rep_id : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    batch : {
        type : Object["1", "2", "3", "4"],
        required : true
    },
    department : {
        type : Object["CIS", "FST", "NR", "PST", "SM"],
        required : true
    },
    email : {
        type : Email,
        required : true
    },
})

const Stu_Batch_Rep = mongoose.model("Stu_Batch_Rep", stu_Batch_RepSchema);

module.exports = Stu_Batch_Rep;