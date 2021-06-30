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
    </div>
  );
}

export default Register;
