const router = require('express').Router();
let Lecturer = require('../models/Lecturer');

//create lecturers

//view lecturers
router.route("/view").get((req, res)=>{
    Lecturer.find().then((lecturers)=>{
        res.json(lecturers)
    }).catch((err)=>{
        console.log(err)
    })
})

//update lecturers
router.route("/update/:lecturerId").put(async(req, res)=>{
    let lecturer_id = req.params.lecturerId;
    const { lecturer_id, name, courses, designation, email, user_id } = req.body;

    const updateLecturer = {
        lecturer_id, 
        name, 
        courses, 
        designation, 
        email, 
        user_id 
    }

    const update = await Lecturer.findByIdAndUpdate( lecturer_id, updateLecturer )
    .then(() => {
        res.status(200).send({status: "lecturer updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    }) 
})

//delete lecturers
router.route("/delete/:lecturerId").delete(async(req,res) => {
    let lecturer_id = req.params.lecturerId;
    await Lecturer.findByIdAndDelete(lecturer_id)
    .then(()=> {
        res.status(200).send({status: "Lecturer deleted"});   
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete lecturer", error: err.message});
    })
})

//one lecturer details view
router.route("/get/:lecturerId").get(async(req, res)=> {
    let lecturer_id = req.params.lecturerId;
    // await Lecturer.findOne(title)
    const lecturer = await Lecturer.findById(lecturer_id)
    .then((lecturer) => {
        res.status(200).send({status: "Lecturer fetched", lecturer });
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get lecturer", error: err.message });
    })
})

module.exports = router;