import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import ForgotPassword from './components/welcome/ForgotPassword'

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/ForgotPassword"><ForgotPassword/></Route>
            <Route exact path="/"><Welcome/></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;