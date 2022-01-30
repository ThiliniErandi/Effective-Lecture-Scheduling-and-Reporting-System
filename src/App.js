import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import ForgotPassword from './components/welcome/ForgotPassword'

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/ForgotPassword"><ForgotPassword/></Route>
            <Route path="/home"><Home/></Route>
            <Route exact path="/"><Welcome/></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;