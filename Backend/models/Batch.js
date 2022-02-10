const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const batchSchema = new Schema ({
    
    batch_id : {
        type : String,
        required : true
    },
    year : {
        type : Object["1", "2", "3", "4"],
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
    rep_id : {
        type : String,
        required : true
    },
})

const Batch = mongoose.model("Batch", batchSchema);

module.exports = Batch;