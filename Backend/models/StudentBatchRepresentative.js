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
        type : String,
        required : true
    },
    department : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
})

const Stu_Batch_Rep = mongoose.model("Stu_Batch_Rep", stu_Batch_RepSchema);

module.exports = Stu_Batch_Rep;