import { useState } from "react";
import "./App.css";
import "./components/login/style.css";
import Signup from "./components/login/register";
import Welcome from "./components/Welcome";
import UserPage from "./components/user-page/UserPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPerson from "./components/add-person/AddPerson";
import AUTH from "./utils/AUTH";
import UserContext from "./utils/UserContext";
import SMSForm from "./components/SMSForm";





function App(props) {
  const [user, setUser] = useState();

  const handleUser = async () => {
    await AUTH.getUser().then((res) => {
      if (res.data._id) {
        return setUser(res.data);
      }
    });
  };

  const handleLogout = async () => {
    await AUTH.logout().then((res) => {
      console.log("successfully logged out!");
      if (res.status === 200) {
        setUser({ loggedIn: false });
      }
    });
  };

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/userpage">
              <UserPage />
            </Route>

            <Route exact path="/add-person">
              <AddPerson />
            </Route>

            <Route exact path="/text">
              <SMSForm />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
