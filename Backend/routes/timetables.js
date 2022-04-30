const router = require('express').Router();
let Timetable = require('../models/Timetable');

//create timetables
router.route("/add").post((req, res) => {
    const timetable_id      = req.body.timetable_id;
    const name = req.body.name;
    // const type  = req.body.type;
    const lecturer_id   = req.body.lecturer_id;
    const batch_id     = req.body.batch_id;
    const rep_id     = req.body.rep_id;
     
    const newTimetable = new Timetable({
        timetable_id,
        name,
        // type,
        lecturer_id,
        batch_id,
        rep_id
    })

    //passing data to the db
    newTimetable.save().then(()=>{
        res.json("Timetable Added")
    }).catch(()=>{
        // console.log(err);
    })
})

//view chats
router.route("/view").get((req, res)=>{
    Timetable.find().then((timetables)=>{
        res.json(timetables)
    }).catch((err)=>{
        // console.log(err)
    })
})

//update timetables
router.route("/update/:timetableId").put(async(req, res)=>{
    let timetable_Id = req.params.timetableId;
    const { timetable_id, name, batch_id, lecturer_id, rep_id } = req.body; 

    const updateTimetable = {
        timetable_id, 
        name,
        batch_id,
        lecturer_id,
        rep_id
    }

    //await - keep next task wait until came promise on previous success 
    const update = await Timetable.findByIdAndUpdate( timetable_id, updateTimetable )
    .then(() => {
        res.status(200).send({status: "timetable updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    }) 
})

//delete timetables
router.route("/delete/:timetableId").delete(async(req,res) => {
    let timetable_id = req.params.timetableId;
    await Timetable.findByIdAndDelete(timetable_id)
    .then(()=> {
        res.status(200).send({status: "Timetable deleted"});   
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete timetable", error: err.message});
    })
})

//one timetable details view
router.route("/get/:timetableId").post(async(req, res)=> {
    let timetable_id = req.params.timetableId;
    const timetable = await Timetable.findById(timetable_id)
    .then((timetable) => {
        res.status(200).send({status: "Timetable fetched", timetable });
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get timetable", error: err.message });
    })
})

module.exports = router;