// const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noticeSchema = new Schema ({
    
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    file : {
        type : Object,
        required : true
    } 

})

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = Notice;