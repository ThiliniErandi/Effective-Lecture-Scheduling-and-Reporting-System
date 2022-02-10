const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatSchema = new Schema ({
    
    chat_id : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
})

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;