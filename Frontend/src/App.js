import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import ForgotPassword from './components/welcome/ForgotPassword'
import Home from './pages/Home';
import Notices from './pages/noticeBoard/Notices';
import AddNotice from './pages/noticeBoard/AddNotice';
import ViewNotice from './pages/noticeBoard/ViewNotice';
import EditNotice from './pages/noticeBoard/EditNotice';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
          <Switch>  
            <Route path="/ForgotPassword"><ForgotPassword/></Route>
            <Route path="/notices"><Notices/></Route>
            <Route path="/addNotice"><AddNotice/></Route>
            <Route path="/viewNotice/:id"><ViewNotice/></Route>
            <Route path="/editNotice/:id"><EditNotice/></Route>
            <Route path="/home"><Home/></Route>
            <Route exact path="/"><Welcome/></Route>
            <Route path="*"><NotFound/></Route>
            
            
            
          </Switch>
      </div>
    </Router>
  );
}

export default App;
