
import './App.css';
import { Login } from './components/login/index';
import './components/login/style.css';
import { Register } from './components/login/index';
import Welcome from './components/Welcome';
import UserPage from './components/user-page/UserPage';
import AddUser from './components/addUser/AddUser';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Welcome />
      <Login />
      <Register />
      <UserPage />
      <AddUser />
    </div>
  );
}

export default App;
