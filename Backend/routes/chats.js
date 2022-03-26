const router = require('express').Router();
let Chat = require('../models/Chat');

//create chats
router.route("/add").post((req, res) => {
    const chat_id      = req.body.chat_id;
    const name = req.body.name;
    const type  = req.body.type;
    const description    = req.body.description;
    // const user_id     = req.body.user_id;
     
    const newChat = new Chat({
        chat_id,
        name,
        type,
        description,
    })

    //passing data to the db
    newChat.save().then(()=>{
        res.json("Chat Added")
    }).catch(()=>{
        // console.log(err);
    })
})

//view chats
router.route("/view").get((req, res)=>{
    Chat.find().then((chats)=>{
        res.json(chats)
    }).catch((err)=>{
        // console.log(err)
    })
})

//update chats
router.route("/update/:chatId").put(async(req, res)=>{
    let chat_Id = req.params.chatId;
    const { chat_id, name, type, description } = req.body; 

    const updateChat = {
        chat_id, 
        name,
        type, 
        description
    }

    //await - keep next task wait until came promise on previous success 
    const update = await Chat.findByIdAndUpdate( chat_id, updateChat )
    .then(() => {
        res.status(200).send({status: "chat updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    }) 
})

//delete chats
router.route("/delete/:chatId").delete(async(req,res) => {
    let chat_id = req.params.chatId;
    await Chat.findByIdAndDelete(chat_id)
    .then(()=> {
        res.status(200).send({status: "Chat deleted"});   
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete chat", error: err.message});
    })
})

//one chat details view
router.route("/get/:chatId").get(async(req, res)=> {
    let chat_id = req.params.chatId;
    const chat = await Chat.findById(chat_id)
    .then((chat) => {
        res.status(200).send({status: "Chat fetched", chat });
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get chat", error: err.message });
    })
})

module.exports = router;