const router = require('express').Router();
let Stu_batch_rep = require('../models/StudentBatchRepresentative');

//create stu_batch_rep
router.route("/add").post((req, res) => {
    const rep_id = req.body.rep_id;
    const name = req.body.name;
    const email = req.body.email;
    const dep_id = req.body.dep_id;
    const batch_id = req.body.batch_id;
    const course_id = req.body.course_id;
    const user_id = req.body.user_id;
     
    const newStu_batch_rep = new Stu_batch_rep({
        rep_id,
        name,
        email,
        dep_id,
        batch_id,
        course_id,
        user_id
    })

    //passing data to the db
    newStu_batch_rep.save().then(()=>{
        res.json("student batch representative Added")
    }).catch(()=>{
        // console.log(err);
    })
})

//view student batch representatives
router.route("/view").get((req, res)=>{
    Stu_batch_rep.find().then((stu_batch_reps)=>{
        res.json(stu_batch_reps)
    }).catch((err)=>{
        console.log(err)
    })
})

//update student batch representatives
router.route("/update/:stu_batch_repId").put(async(req, res)=>{
    let stu_batch_rep_id = req.params.stu_batch_repId;
    const { rep_id, name, email, dep_id, batch_id, course_id, user_id } = req.body; 

    const updateStu_batch_rep = {
        rep_id,
        name,
        email,
        dep_id,
        batch_id,
        course_id,
        user_id
    }

    const update = await Stu_batch_rep.findByIdAndUpdate( stu_batch_rep_id, updateStu_batch_rep )
    .then(() => {
        res.status(200).send({status: "Student batch representative updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    }) 
})

//delete student batch representatives
router.route("/delete/:stu_batch_repId").delete(async(req,res) => {
    let stu_batch_rep_id = req.params.stu_batch_repId;
    await Stu_batch_rep.findByIdAndDelete(stu_batch_rep_id)
    .then(()=> {
        res.status(200).send({status: "Student batch representative deleted"});   
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete student batch representative", error: err.message});
    })
})

//one student batch representative details view
router.route("/get/:stu_batch_repId").post(async(req, res)=> {
    let stu_batch_rep_id = req.params.stu_batch_repId;

    const stu_batch_rep = await Stu_batch_rep.findById(stu_batch_rep_id)
    .then((stu_batch_rep) => {
        res.status(200).send({status: "Student batch representative fetched", stu_batch_rep });
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get Student batch representative", error: err.message });
    })
})

module.exports = router;