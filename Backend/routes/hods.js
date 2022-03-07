const router = require('express').Router();
let HOD = require('../models/HOD');

//create hods
router.route("/add").post((req, res) => {
    const hod_id= req.body.hod_id;
    const name = req.body.name;
    const course_id = req.body.course_id;
    const email= req.body.email;
    const designation = req.body.designation;
    const user_id = req.body.user_id;

    const newHOD = new HOD({
        hod_id,
        name,
        course_id,
        email,
        designation,
        user_id
    })

    //passing data to the db
    newHOD.save().then(()=>{
        res.json("HOD Added")
    }).catch(()=>{
        // console.log(err);
    })
})

//view hods
router.route("/view").get((req, res)=>{
    HOD.find().then((hods)=>{
        res.json(hods)
    }).catch((err)=>{
        console.log(err)
    })
})

//update hods
router.route("/update/:hodId").put(async(req, res)=>{
    let head_id = req.params.hodId;
    const { hod_id, name, course_id, email, designation, user_id } = req.body; //destructure

    const updateHOD = {
        hod_id,
        name,
        course_id,
        email,
        designation,
        user_id
    }

    //await - keep next task wait until came promise on previous success 
    const update = await HOD.findByIdAndUpdate( head_id, updateHOD)
    .then(() => {
        res.status(200).send({status: "HOD updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    }) 
})

//delete hods
router.route("/delete/:hodId").delete(async(req,res) => {
    let hod_id = req.params.hodId;
    await HOD.findByIdAndDelete(hod_id)
    .then(()=> {
        res.status(200).send({status: "HOD deleted"});   
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete HOD", error: err.message});
    })
})

//one HOD details view
router.route("/get/:hodId").get(async(req, res)=> {
    let hod_id = req.params.hodId;
    // await hod.findOne(title)
    const hod = await HOD.findById(hod_id)
    .then((hod) => {
        res.status(200).send({status: "HOD fetched", hod });
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get HOD", error: err.message });
    })
})

module.exports = router;