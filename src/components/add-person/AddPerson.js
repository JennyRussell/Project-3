import React from "react";
import { useHistory } from 'react-router-dom';
import imagePh from '../image-ph.png';


function AddPerson () {

  const history = useHistory();

    return (
        <div>
            <nav className='add w-100 h-24 border-2'>
                <h1 className='m-4 text-6xl'>Add Person</h1>
            </nav>
      <div className="rg-container w-50">
        <form className="rg-content">
          <div className="m-3 flex flex-col flex-wrap">
            <div className="first-name m-2 flex-col">
              <label htmlFor="first-name"></label>
              <input className="user-input m-1" type="text" name="first" placeholder="First Name" />
              <label htmlFor="email"></label>
              <input className="user-input m-1" type="text" name="last" placeholder="Last Name" />
              <label htmlFor="last name"></label>
              <input className="user-input m-1" type="text" name="birthdate" placeholder="Birthdate" />
            </div>
            <div className="first-name m-2 flex-col">
              <label htmlFor="relationship"></label>
              <input className="user-input m-1" type="text" name="relationship" placeholder="Relationship" />
              <label htmlFor="anniversary"></label>
              <input className="user-input m-1" type="text" name="anniveersary" placeholder="Anniversary" />
              <label htmlFor="special-occasion"></label>
              <input className="user-input m-1" type="text" name="special" placeholder="Special Occasion" />
            </div>
            
          </div>
          <img className="icon w-42 h-36 m-2" src={imagePh} alt="pic"></img>
        </form>
        <div className="footer">
          <button onClick={() => history.push('/userpage')}  type="button" className="btn-rg">
            Add
          </button>
        </div>
      </div>
      </div>
    );
  }

export default AddPerson;