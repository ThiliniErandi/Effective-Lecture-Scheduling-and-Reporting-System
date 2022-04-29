const router = require('express').Router();
let Batch = require('../models/Batch');

//create batches
router.route("/add").post((req, res) => {
    const year       = req.body.year;
    const department = req.body.department;
    // const course_id  = req.body.course_id;
    const hod    = req.body.hod;
    const rep     = req.body.rep;
    //if we include a number data type => const age = Number(req.body.age)
     
    const newBatch = new Batch({
        year,
        department,
        // course_id,
        hod,
        rep
    })

    //passing data to the db
    newBatch.save().then(()=>{
        res.json("Batch Added")
    }).catch(()=>{
        // console.log(err);
    })
})

//view batches
router.route("/view").get((req, res)=>{
    Batch.find().then((batches)=>{
        res.json(batches)
    }).catch((err)=>{
        // console.log(err)
    })
})

//update batches
router.route("/update/:batchId").put(async(req, res)=>{
    let batch_id = req.params.batchId;
    const { year, department_id, hod_id, rep_id } = req.body; 

    const updateBatch = {
        year, 
        department_id,
        // course_id, 
        hod_id, 
        rep_id,
    }

    //await - keep next task wait until came promise on previous success 
    const update = await Batch.findByIdAndUpdate( batch_id, updateBatch )
    .then(() => {
        res.status(200).send({status: "batch updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    }) 
})

//delete batches
router.route("/delete/:id").delete(async(req,res) => {
    let batch_id = req.params.id;
    await Batch.findByIdAndDelete(batch_id)
    .then(()=> {
        res.status(200).send({status: "Batch deleted"});   
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete batch", error: err.message});
    })
})

//one batch details view
router.route("/get/:batchId").get(async(req, res)=> {
    let batch_id = req.params.batchId;
    // await Notice.findOne(title)
    const batch = await Batch.findById(batch_id)
    .then((batch) => {
        res.status(200).send({status: "Batch fetched", batch });
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get batch", error: err.message });
    })
})

module.exports = router;