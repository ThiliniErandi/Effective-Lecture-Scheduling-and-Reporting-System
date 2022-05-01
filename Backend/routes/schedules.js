const router = require('express').Router();
let Chat = require('../models/Chat');

//create chats
router.route("/add").post((req, res) => {
    const schedule_id      = req.body.schedule_id;
    const date = req.body.date;
    const time  = req.body.time;
    const lecture_id    = req.body.lecture_id;
    const batch_id     = req.body.batch_id;
    const rep_id     = req.body.rep_id;
     
    const newSchedule = new Schedule({
        schedule_id,
        date,
        time,
        lecture_id,
        batch_id,
        rep_id
    })

    //passing data to the db
    newSchedule.save().then(()=>{
        res.json("Schedule Added")
    }).catch(()=>{
        // console.log(err);
    })
})

//view schedules
router.route("/view").get((req, res)=>{
    Schedule.find().then((schedules)=>{
        res.json(schedules)
    }).catch((err)=>{
        // console.log(err)
    })
})

//update schedules
router.route("/update/:scheduleId").put(async(req, res)=>{
    let schedule_Id = req.params.scheduleId;
    const { schedule_id, date, time, lecture_id, batch_id, rep_id } = req.body; 

    const updateChat = {
        schedule_id, 
        date,
        time, 
        lecture_id,
        batch_id,
        rep_id
    }

    //await - keep next task wait until came promise on previous success 
    const update = await Schedule.findByIdAndUpdate( schedule_id, updateSchedule )
    .then(() => {
        res.status(200).send({status: "schedule updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    }) 
})

//delete schedules
router.route("/delete/:scheduleId").delete(async(req,res) => {
    let schedule_id = req.params.scheduleId;
    await Schedule.findByIdAndDelete(schedule_id)
    .then(()=> {
        res.status(200).send({status: "Schedule deleted"});   
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete schedule", error: err.message});
    })
})

//one schedule details view
router.route("/get/:scheduleId").post(async(req, res)=> {
    let schedule_id = req.params.scheduleId;
    const schedule = await schedule.findById(schedule_id)
    .then((schedule) => {
        res.status(200).send({status: "Schedule fetched", schedule });
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get chat", error: err.message });
    })
})

module.exports = router;