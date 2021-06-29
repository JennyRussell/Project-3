import React from "react";
import { useHistory } from 'react-router-dom';

function Signup (props) {

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
              <input
                type="text"
                name="relationship"
                placeholder="Relationship"
              />
            </div>
          </div>
        </form>
        <div className="footer">
          <button onClick={() => history.push('/userpage')}  type="button" className="btn-rg">
            Create Account
          </button>
        </div>
      </div>
    );
  }

export default Signup;