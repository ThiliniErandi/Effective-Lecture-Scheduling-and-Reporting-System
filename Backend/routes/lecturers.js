const router = require('express').Router();
let Lecturer = require('../models/Lecturer');

//create lecturers
router.route("/add").post((req, res) => {
    const lecturer_id= req.body.lecturer_id;
    const name = req.body.name;
    const course_id = req.body.course_id;
    const email= req.body.email;
    const designation = req.body.designation;
    const user_id = req.body.user_id;

    const newLecturer = new Lecturer({
        lecturer_id,
        name,
        course_id,
        email,
        designation,
        user_id
    })

    //passing data to the db
    newLecturer.save().then(()=>{
        res.json("Lecturer Added")
    }).catch(()=>{
        // console.log(err);
    })
})

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
    let lecturerid = req.params.lecturerId;
    const { lecturer_id, name, course_id, designation, email, user_id } = req.body;

    const updateLecturer = {
        lecturer_id, 
        name, 
        course_id, 
        designation, 
        email, 
        user_id 
    }

    const update = await Lecturer.findByIdAndUpdate( lecturerid, updateLecturer )
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