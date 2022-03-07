const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const batchSchema = new Schema({

    // batch_id : {
    //     type : String,
    //     required : true
    // },
    year: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    course_id: {
        type: String,
        required: true
    },
    hod_id: {
        type: String,
        required: true
    },
    rep_id: {
        type: String,
        required: true
    },
})

const Batch = mongoose.model("Batch", batchSchema);

module.exports = Batch;