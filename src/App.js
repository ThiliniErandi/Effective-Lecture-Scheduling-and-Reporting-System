import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';

function App() {
  return (
    <Router>
      <div className="App">
        <Welcome />
        <div className="content">
          <Switch>
            <Route exact path="/">
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;