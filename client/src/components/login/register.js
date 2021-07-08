// import { useState } from "react";
import AUTH from "../../utils/AUTH";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect }  from "react";
import Axios from 'axios';


function Signup() {

  const history = useHistory();
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthdate: "",
    phone_number: "",
    anniversary: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("click");
  //   console.log(newUser);
  //   AUTH.register(newUser)
  //     .then(() => {
  //       console.log(newUser);
  //       AUTH.login(newUser.email, newUser.password);
  //     })
  //     .then((res) => {
  //       console.log(res.data.user);
  //     })
  //     .catch((err) => console.log(err));
  // };

   const handleSubmit = event => {
        event.preventDefault();
        console.log(newUser);
        Axios.post('http://localhost:3001/api/register', {
        first_name: newUser.first_name,
        lastName: newUser.last_name,
        email: newUser.email,
        password: newUser.password,
        birthdate: newUser.birthdate, 
        phone_number: newUser.phone_number, 
        anniversary: newUser.anniversary,
    }).then(() => {
        alert('front end register submit worked')
    })
    };

  return (
    <div className="container-rg">
      <div className="content-rg">
        <h2>Sign Up</h2>
      </div>
      <div className="form-rg">
        <form className="form-inside" onSubmit={handleSubmit}>
          <div className="row">
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
          </div>
          <div className="row">
            <input
              className="registerInput"
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
            <input
              className="registerInput"
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
          </div>
          <div className="row">
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
          </div>
          <div className="row">
            <input
              className="registerInput"
              type="number"
              placeholder="Phone Number"
              name="phoneNumber"
              onChange={(e) =>
                setNewUser({ ...newUser, phone_number: e.target.value })
              }
            />
          </div>
          <button
            className="btn-rg"
            // onClick={() => history.push("/userpage")}
            type="submit"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
