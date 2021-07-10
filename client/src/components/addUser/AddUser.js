import React from "react";

function addUser() {
  return (
    <div className="rg-container">
      <div className="first-name">
        <lable htmlFor="first-name"></lable>
        <input type="text" required name="first" placeholder="First Name" />
      </div>
      <div className="last-name">
        <lable htmlFor="last-name"></lable>
        <input type="text" required name="last" placeholder="Last Name" />
      </div>
      <div className="birthdate">
        <lable htmlFor="birthdate"></lable>
        <input type="date" required name="birthdate" placeholder="Birthdate" />
      </div>
      {/* <div className="gender">
        <lable htmlFor="gender"></lable>
        <input type="text" name="gender" placeholder="Gender" />
      </div> */}
      <div className="phone">
        <lable htmlFor="phone"></lable>
        <input type="text" required name="phone" placeholder="Phone Number" />
      </div>
      <div className="anniversary">
        <lable htmlFor="anniversary"></lable>
        <input type="date" name="anniversary" placeholder="12/12/2021"/>
      </div>
      <div className="relationship">
        <lable htmlFor="relationship"></lable>
        <input type="text" name="relationship" placeholder="Relationship" />
      </div>
      <div className="footer">
        <button type="button" className="btn-rg">
          Add Loved One
        </button>
      </div>
    </div>
  );
}

export default addUser;
