import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import ForgotPassword from './forms/welcome/ForgotPassword';
import Home from './pages/Home';
import Dashboard from './pages/dashboard/Dashbord';
import Users from './pages/dashboard/user/Users';
import AddEditUser from './forms/Dashboard/user/AddEditUser';
import Batches from './pages/dashboard/batch/batches';
import AddEditBatch from './forms/Dashboard/batch/AddEditBatch';
import Courses from './pages/dashboard/course/courses';
import AddEditCourse from './forms/Dashboard/course/AddEditCourse';
import Departments from './pages/dashboard/department/departments';
import AddEditDepartment from './forms/Dashboard/department/AddEditDepartment';
import HODs from './pages/dashboard/hod/HODs'
import AddEditHOD from './forms/Dashboard/hod/AddEditHOD';
import Lecturers from './pages/dashboard/lecturer/lecturers'
import AddEditLecturer from './forms/Dashboard/lecturer/AddEditLecturer';
import Representatives from './pages/dashboard/representative/representatives'
import AddEditRepresentative from './forms/Dashboard/representative/AddEditRepresentative';
import NoticeBoard from './pages/noticeBoard/NoticeBoard';
import AddEditNotice from './forms/notice/AddEditNotice';
import ViewNotice from './pages/noticeBoard/ViewNotice';
import TimeTable from './pages/timetable/timetable';
import AddEditTimetable from './forms/Dashboard/AddEditTimetable';
import Report from './pages/Report/Report';
// import PDF from './pages/Report/PDF';
import Chats from './pages/chat/chats';
// import ChatHome from './pages/chat/Home/index';
// import Chat from './pages/chat/Chat';
import Profile from './pages/dashboard/user/Profile'
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <Router >
            <div className = "App" >
            <ToastContainer/>
            <Switch >
                <Route path = "/timetable" > < TimeTable/> </Route> 
                <Route exact path = "/addEditTimetable" > < AddEditTimetable/> </Route>
                <Route path = "/addEditTimetable/:id" > < AddEditTimetable/> </Route> 
                <Route path = "/report" > < Report/> </Route> 
                {/* <Route path = "/pdf" > < PDF/> </Route>  */}
                <Route path = "/chats" > < Chats/> </Route> 
                {/* <Route path = "/chatHome" > <ChatHome/></Route> 
                <Route path = "/chat/:id" component={Chat} ></Route>  */}
                <Route path = "/viewNotice/:id" > < ViewNotice/> </Route> 
                <Route path = "/noticeBoard" > < NoticeBoard/> </Route> 
                <Route exact path = "/addEditNotice" > < AddEditNotice/> </Route>
                <Route path = "/addEditNotice/:id" > < AddEditNotice/> </Route>  
                <Route path="/profile" > < Profile /> </Route>
                <Route path="/users" > < Users /> </Route>
                <Route exact path="/addEditUser" > < AddEditUser /> </Route>
                <Route path="/addEditUser/:id" > < AddEditUser /> </Route>
                <Route path = "/batches" > <Batches/> </Route> 
                <Route exact path = "/addEditBatch" > < AddEditBatch/> </Route> 
                <Route path = "/addEditBatch/:id" > < AddEditBatch/> </Route> 
                <Route path = "/courses" > <Courses/> </Route> 
                <Route exact path = "/addEditCourse" > < AddEditCourse/> </Route> 
                <Route path = "/addEditCourse/:id" > < AddEditCourse/> </Route> 
                <Route path = "/departments" > <Departments/> </Route> 
                <Route exact path = "/addEditDepartment" > < AddEditDepartment/> </Route> 
                <Route path = "/addEditDepartment/:id" > < AddEditDepartment/> </Route> 
                <Route path = "/HODs" > <HODs/> </Route> 
                <Route exact path = "/addEditHOD" > < AddEditHOD/> </Route>
                <Route path = "/addEditHOD/:id" > < AddEditHOD/> </Route>  
                <Route path = "/lecturers" > <Lecturers/> </Route> 
                <Route exact path = "/addEditLecturer" > < AddEditLecturer/> </Route>
                <Route path = "/addEditLecturer/:id" > < AddEditLecturer/> </Route>  
                <Route path = "/representatives" > <Representatives/> </Route> 
                <Route exact path = "/addEditRepresentatives" > < AddEditRepresentative/> </Route> 
                <Route path = "/addEditRepresentatives/:id" > < AddEditRepresentative/> </Route> 
                <Route path = "/home" > < Home/> </Route> 
                <Route path = "/dashboard" > < Dashboard/> </Route> 
                <Route path = "/ForgotPassword" > < ForgotPassword/> </Route> 
                <Route exact path = "/" > < Welcome/> </Route> 
                <Route path = "*" > < NotFound/> </Route>
            </Switch> 
            </div > 
        </Router>
    );
}

export default App;