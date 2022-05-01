const router = require('express').Router();
let Course = require('../models/Course');

//create courses
router.route("/add").post((req, res) => {
    const course_id = req.body.course_id;
    const name = req.body.name;
     
    const newCourse = new Course({
        course_id,
        name
    })

    //passing data to the db
    newCourse.save().then(()=>{
        res.json("Course Added")
    }).catch(()=>{
        console.log(err);
    })
})

//view courses
router.route("/view").get((req, res)=>{
    Course.find().then((courses)=>{
        res.json(courses)
    }).catch((err)=>{
        console.log(err)
    })
})

//update courses
router.route("/update/:courseId").put(async(req, res)=>{
    let courseid = req.params.courseId;
    const { course_id, name } = req.body; //destructure

    const updateCourse= {
        course_id,
        name
    }

    //await - keep next task wait until came promise on previous success 
    const update = await Course.findByIdAndUpdate( courseid, updateCourse )
    .then(() => {
        res.status(200).send({status: "course updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    }) 
})

//delete courses
router.route("/delete/:courseId").delete(async(req,res) => {
    let course_id = req.params.courseId;
    await Course.findByIdAndDelete(course_id)
    .then(()=> {
        res.status(200).send({status: "Course deleted"});   
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete course", error: err.message});
    })
})

//one course details view
router.route("/get/:courseId").post(async(req, res)=> {
    let course_id = req.params.courseId;
    // await Course.findOne(title)
    const course = await Course.findById(course_id)
    .then((course) => {
        res.status(200).send({status: "Course fetched", course });
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get course", error: err.message });
    })
})

module.exports = router;