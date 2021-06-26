import React from "react";

export class Register extends React.Component {
  // tsConstructorType(props) {
  //     super(props);
  // }

  render() {
    return (
      <div className="rg-container">
        <div className="rg-header">Register</div>
        <form className="rg-content">
          {/* <div className="image">
                    <img src={loginImg} />
                </div> */}
          <div className="form">
            <div className="first-name">
              <lable htmlFor="first-name"></lable>
              <input type="text" name="first" placeholder="First Name" />
            </div>
            <div className="last-name">
              <lable htmlFor="last-name"></lable>
              <input type="text" name="last" placeholder="Last Name" />
            </div>
            <div className="form-group-rg">
              <lable htmlFor="email"></lable>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group-rg">
              <lable htmlFor="password"></lable>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="birthdate">
              <lable htmlFor="birthdate"></lable>
              <input type="text" name="birthdate" placeholder="Birthdate" />
            </div>
            <div className="gender">
              <lable htmlFor="gender"></lable>
              <input type="text" name="gender" placeholder="Gender" />
            </div>
            <div className="phone">
              <lable htmlFor="phone"></lable>
              <input type="text" name="phone" placeholder="Phone Number" />
            </div>
            <div className="anniversary">
              <lable htmlFor="anniversary"></lable>
              <input
                type="text"
                name="anniversary"
                placeholder="Anniversary Date"
              />
            </div>
            <div className="relationship">
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
          <button type="button" className="btn-rg">
            Create Account
          </button>
        </div>
      </div>
    );
  }
}
