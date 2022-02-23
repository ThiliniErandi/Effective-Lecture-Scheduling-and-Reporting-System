import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import ForgotPassword from './forms/welcome/ForgotPassword'
import Home from './pages/Home';
import AddEditNotice from './forms/notice/AddEditNotice';
import NoticeBoard from './pages/noticeBoard/NoticeBoard';
import ViewNotice from './pages/noticeBoard/ViewNotice';
import AddEditUser from './forms/user/AddEditUser';
import Users from './pages/user/Users'
import Profile from './pages/user/Profile'
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
    return ( 
        <Router >
            <div className = "App" >
            <ToastContainer/>
            <Switch >
                <Route path = "/viewNotice/:id" > < ViewNotice/> </Route> 
                <Route path = "/noticeBoard" > < NoticeBoard/> </Route> 
                <Route path = "/addEditNotice" > < AddEditNotice/> </Route> 
                <Route path = "/profile" > < Profile/> </Route> 
                <Route path = "/users" > < Users/> </Route> 
                <Route path = "/addEditUser" > < AddEditUser/> </Route> 
                <Route path = "/home" > < Home/> </Route> 
                <Route path = "/ForgotPassword" > < ForgotPassword/> </Route> 
                <Route exact path = "/" > < Welcome/> </Route> 
                <Route path = "*" > < NotFound/> </Route>
            </Switch> 
            </div > 
        </Router>
    );
}

export default App;