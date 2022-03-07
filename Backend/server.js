const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');

const app = express();
const PORT = process.env.PORT || 8070;

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Mongodb Connection Success!");
})

const userRouter = require('./routes/users.js')
app.use("/users", userRouter);

const hodRouter = require('./routes/hods.js')
app.use("/hods", hodRouter);

const lecturerRouter = require('./routes/lecturers.js')
app.use("/lecturers", lecturerRouter);

const stu_batch_repRouter = require('./routes/studentBatchRepresentatives.js')
app.use("/representatives", stu_batch_repRouter);

const batchrouter = require('./routes/batches.js')
app.use("/batches", batchrouter);

const departmentRouter = require('./routes/departments.js')
app.use("/departments", departmentRouter);

const courseRouter = require('./routes/courses.js')
app.use("/courses", courseRouter);

const noticeRouter = require('./routes/notices.js')
app.use("/notices", noticeRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})







// const scheduleRouter = require('./routes/schedules.js')
// app.use("/schedules", scheduleRouter);

// const timetableRouter = require('./routes/timetables.js')
// app.use("/timetables", timetableRouter);

// const chatRouter = require('./routes/chats.js')
// app.use("/chats", chatRouter);

