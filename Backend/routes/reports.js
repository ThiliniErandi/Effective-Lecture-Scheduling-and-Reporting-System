const router = require('express').Router();
let Report = require('../models/Report');

//create reports
router.route("/add").post((req, res) => {
    const report_id      = req.body.report_id;
    const name = req.body.name;
    const description    = req.body.description;
    // const timetable_id     = req.body.timetable_id;
     
    const newReport = new Report({
        report_id,
        name,
        description
    })

    //passing data to the db
    newReport.save().then(()=>{
        res.json("Report Added")
    }).catch(()=>{
        // console.log(err);
    })
})

//view reports
router.route("/view").get((req, res)=>{
    Report.find().then((reports)=>{
        res.json(reports)
    }).catch((err)=>{
        // console.log(err)
    })
})

//update reports
router.route("/update/:reportId").put(async(req, res)=>{
    let report_Id = req.params.reportId;
    const { report_id, name, description } = req.body; 

    const updateReport = {
        chat_id, 
        name, 
        description
    }

    //await - keep next task wait until came promise on previous success 
    const update = await Chat.findByIdAndUpdate( chat_id, updateReport )
    .then(() => {
        res.status(200).send({status: "report updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    }) 
})

//delete reports
router.route("/delete/:reportId").delete(async(req,res) => {
    let report_id = req.params.reportId;
    await Report.findByIdAndDelete(report_id)
    .then(()=> {
        res.status(200).send({status: "Report deleted"});   
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete report", error: err.message});
    })
})

//one report details view
router.route("/get/:reportId").post(async(req, res)=> {
    let report_id = req.params.reportId;
    const report = await Report.findById(report_id)
    .then((report) => {
        res.status(200).send({status: "Report fetched", report });
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with get report", error: err.message });
    })
})

module.exports = router;