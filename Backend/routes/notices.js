const router = require('express').Router();
let Notice = require('../models/Notice');

//create notices
router.route("/add").post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const titleImg = req.files.titleImg;

    const newNotice = new Notice({
        title,
        description,
        titleImg
    })

    //passing data to the db
    newNotice.save().then(()=>{
        res.json("Notice Added")
    }).catch(()=>{
        console.log(err);
    })
})

// Upload Endpoint
router.route("/upload").post((req, res) => { 
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const titleImg = req.files.titleImg;

    titleImg.mv(`${__dirname}/frontend/public/assets/images/uploads/${titleImg.name}`, err => {
        if (err) {
        console.error(err);
        return res.status(500).send(err);
        }

        res.json({ fileName: titleImg.name, filePath: `/uploads/${titleImg.name}` });
    });
});



//view notices
router.route("/view").get((req, res)=>{
    Notice.find().then((notices)=>{
        res.json(notices)
    }).catch((err)=>{
        console.log(err)
    })
})

//update notices
router.route("/update/:noticeId").put(async(req, res)=>{
    let notice_id = req.params.noticeId;
    const { title, description } = req.body; //destructure

    const updateNotice = {
        title,
        description,
        // titleImg
    }

    //await - keep next task wait until came promise on previous success 
    const update = await Notice.findByIdAndUpdate( notice_id, updateNotice )
    .then(() => {
        res.status(200).send({status: "notice updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    }) 
})

//delete notices
router.route("/delete/:noticeId").delete(async(req,res) => {
    let notice_id = req.params.noticeId;
    await Notice.findByIdAndDelete(notice_id)
    .then(()=> {
        res.status(200).send({status: "Notice deleted"});   
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete notice", error: err.message});
    })
})

//one notice details view
router.route("/get/:noticeId").get(async(req, res)=> {
    let notice_id = req.params.noticeId;
    const notice = await Notice.findById(notice_id)
    .then((notice) => {
        res.status(200).send({status: "Notice fetched", notice });
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get notice", error: err.message });
    })
})

module.exports = router;