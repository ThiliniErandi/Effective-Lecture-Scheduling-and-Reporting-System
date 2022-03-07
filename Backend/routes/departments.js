const router = require('express').Router();
let Department = require('../models/Department');

//create departments
router.route("/add").post((req, res) => {
    const dep_id = req.body.dep_id;
    const name = req.body.name;
     
    const newDepartment = new Department({
        dep_id,
        name
    })

    //passing data to the db
    newDepartment.save().then(()=>{
        res.json("Department Added")
    }).catch(()=>{
        // console.log(err);
    })
})

//view departments
router.route("/view").get((req, res)=>{
    Department.find().then((departments)=>{
        res.json(departments)
    }).catch((err)=>{
        console.log(err)
    })
})

//update departments
router.route("/update/:departmentId").put(async(req, res)=>{
    let department_id = req.params.departmentId;
    const { dep_id, name } = req.body; //destructure

    const updateDepartment = {
        dep_id,
        name
    }

    //await - keep next task wait until came promise on previous success 
    const update = await Department.findByIdAndUpdate( department_id, updateDepartment )
    .then(() => {
        res.status(200).send({status: "department updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    }) 
})

//delete departments
router.route("/delete/:departmentId").delete(async(req,res) => {
    let dep_id = req.params.departmentId;
    await Department.findByIdAndDelete(dep_id)
    .then(()=> {
        res.status(200).send({status: "Department deleted"});   
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete department", error: err.message});
    })
})

//one department details view
router.route("/get/:depId").get(async(req, res)=> {
    let dep_id = req.params.depId;
    // await Department.findOne(title)
    const dep = await Department.findById(dep_id)
    .then((department) => {
        res.status(200).send({status: "Notice fetched", department });
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get department", error: err.message });
    })
})

module.exports = router;