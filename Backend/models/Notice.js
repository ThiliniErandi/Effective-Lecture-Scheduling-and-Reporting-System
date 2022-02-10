const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noticeSchema = new Schema ({
    
    title : {
        type : String,
        required : true
    },
    // image file upload
    description : {
        type : String,
        required : true
    },
    // user_type : {
    //     type: [
    //             "1",
    //             "2",
    //             "3",
    //             "4",
    //           ],
    //     required : true,
    // },

})

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = Notice;