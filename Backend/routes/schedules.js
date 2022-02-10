const router = require('express').Router();
let Schedule = require('../models/Schedule');

//create schedule
router.route("/add").post((req, res) => {
    const schedule_id = req.body.schedule_id;
    const date = req.body.date;
    const time = req.body.time;
    const lecturer_id = req.body.lecturer_id;
    const rep_id = req.body.rep_id;
     
    const newSchedule = new Schedule({
        schedule_id,
        date,
        time,
        lecturer_id,
        rep_id
    })

    //passing data to the db
    newSchedule.save().then(()=>{
        res.json("Lecture Scheduled")
    }).catch(()=>{
        console.log(err);
    })
})

//view schedules
router.route("/view").get((req, res)=>{
    Schedule.find().then(( schedules)=>{
        res.json(schedules)
    }).catch((err)=>{
        console.log(err)
    })
})

//update  schedules
router.route("/update/:scheduleId").put(async(req, res)=>{
    let schedule_id = req.params. scheduleId;
    const { title, description } = req.body;

    const updateSchedule = {
        schedule_id,
        date,
        time,
        lecturer_id,
        rep_id
    }

    const update = await Schedule.findByIdAndUpdate( schedule_id, updateSchedule )
    .then(() => {
        res.status(200).send({status: "Scheduled lecture updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    }) 
})

//delete schedules
router.route("/delete/:scheduleId").delete(async(req,res) => {
    let notice_id = req.params.scheduleId;
    await Schedule.findByIdAndDelete(schedule_id)
    .then(()=> {
        res.status(200).send({status: "Scheduled lecture deleted"});   
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete schedule", error: err.message});
    })
})

//a lecture scheduled details view
router.route("/get/:scheduleId").get(async(req, res)=> {
    let schedule_id = req.params.scheduleId;

    const schedule = await Schedule.findById(schedule_id)
    .then((schedule) => {
        res.status(200).send({status: "Schedule fetched", schedule });
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get schedule", error: err.message });
    })
})

module.exports = router;