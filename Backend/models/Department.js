const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const departmentSchema = new Schema ({
    
    dep_id : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
})

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;