
import './App.css';
import { Login } from './components/login/index';
import './components/login/style.css';
import Signup from './components/login/register';
import Welcome from './components/Welcome';
import UserPage from './components/user-page/UserPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App(props) {

  return (
    <div className="App">
        <Router>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>

          <Route path="/login/register" exact>
            <Signup />
          </Route>
        </Switch>
      </Router>
      <UserPage />
    </div>
  );
};
      
export default App;
