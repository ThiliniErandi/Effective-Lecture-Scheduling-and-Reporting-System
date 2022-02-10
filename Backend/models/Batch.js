const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const batchSchema = new Schema ({
    
    batch_id : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true
    },
    department : {
        type : String,
        required : true
    },
    HOD : {
        type : String,
        required : true
    },
    stu_representative : {
        type : String,
        required : true
    },
})

const Batch = mongoose.model("Batch", batchSchema);

module.exports = Batch;