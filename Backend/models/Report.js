const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({

    report_id : {
        type : String,
        required : true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;