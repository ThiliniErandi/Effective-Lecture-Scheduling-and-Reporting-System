import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import ForgotPassword from './components/welcome/ForgotPassword'
import Home from './pages/Home';
import Notices from './pages/noticeBoard/Notices';
import NoticeHome from './pages/noticeBoard/NoticeHome';
import AddEditNotice from './pages/noticeBoard/AddEditNotice';
import ViewNotice from './pages/noticeBoard/ViewNotice';
// import EditNotice from './pages/noticeBoard/EditNotice';
import NotFound from './pages/NotFound';
import Alerts from './components/alerts'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
    return ( 
        <Router >
        <div className = "App" >
        <ToastContainer/>
        <Switch >
        <Route path = "/ForgotPassword" > < ForgotPassword/> </Route> 
        <Route path = "/alerts" > < Alerts/> </Route> 
        <Route path = "/notices" > < Notices/> </Route> 
        <Route path = "/noticeHome" > < NoticeHome/> </Route> 
        <Route path = "/addEditNotice" > < AddEditNotice/> </Route> 
        <Route path = "/viewNotice/:id" > < ViewNotice/> </Route> 
        <Route path = "/home" > < Home/> </Route> 
        <Route exact path = "/" > < Welcome/> </Route> 
        <Route path = "*" > < NotFound/> </Route>
        </Switch> 
        </div > 
        </Router>
    );
}

export default App;