<<<<<<< HEAD
import { useState } from "react";
import AUTH from "../../utils/AUTH";

function Register() {
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
    AUTH.register(newUser)
      .then(() => {
        console.log(newUser);
        AUTH.login(newUser.email, newUser.password);
      })
      .then((res) => {
        console.log(res.data.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-rg">
      <div className="content-rg">
        <h2>Sign Up</h2>
      </div>
      <form className="form-rg" onSubmit={handleSubmit}>
        <input
          className="registerInput"
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={(e) =>
            setNewUser({ ...newUser, first_name: e.target.value })
          }
        />
        <input
          className="registerInput"
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={(e) =>
            setNewUser({ ...newUser, last_name: e.target.value })
          }
        />
        <input
          className="registerInput"
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          className="registerInput"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <input
          className="registerInput"
          type="date"
          placeholder="birthdate"
          name="birthdate"
          onChange={(e) =>
            setNewUser({ ...newUser, birthdate: e.target.value })
          }
        />
        <input
          className="registerInput"
          type="date"
          placeholder="Anniversary Date"
          name="anniversary"
          onChange={(e) =>
            setNewUser({ ...newUser, anniversary: e.target.value })
          }
        />
        <input
          className="registerInput"
          type="number"
          placeholder="Phone Number"
          name="phoneNumber"
          onChange={(e) =>
            setNewUser({ ...newUser, phone_number: e.target.value })
          }
        />
      </form>
      <button className="btn-rg" type="submit">
        Create Account
      </button>
=======
import React from "react";
import { useHistory } from "react-router-dom";

function Register(props) {
  const history = useHistory();

  return (
    <div className="rg-container">
      <div className="rg-header">Register</div>
      <form className="rg-content">
        {/* <div className="image">
                    <img src={loginImg} />
                </div> */}
        <div className="form-rg">
          <div className="first-name">
            <lable htmlFor="first-name"></lable>
            <input type="text" name="first" placeholder="First Name" />
          </div>
          <div className="form-rg">
            <lable htmlFor="last-name"></lable>
            <input type="text" name="last" placeholder="Last Name" />
          </div>
          <div className="form-rg">
            <lable htmlFor="email"></lable>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="form-rg">
            <lable htmlFor="password"></lable>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="form-rg">
            <lable htmlFor="birthdate"></lable>
            <input type="text" name="birthdate" placeholder="Birthdate" />
          </div>
          <div className="form-rg">
            <lable htmlFor="gender"></lable>
            <input type="text" name="gender" placeholder="Gender" />
          </div>
          <div className="form-rg">
            <lable htmlFor="phone"></lable>
            <input type="text" name="phone" placeholder="Phone Number" />
          </div>
          <div className="form-rg">
            <lable htmlFor="anniversary"></lable>
            <input
              type="text"
              name="anniversary"
              placeholder="Anniversary Date"
            />
          </div>
          <div className="form-rg">
            <lable htmlFor="relationship"></lable>
            <input type="text" name="relationship" placeholder="Relationship" />
          </div>
        </div>
      </form>
      <div className="footer">
        <button
          onClick={() => history.push("/userpage")}
          type="button"
          className="btn-rg"
        >
          Create Account
        </button>
      </div>
>>>>>>> master
    </div>
  );
}

export default Register;
