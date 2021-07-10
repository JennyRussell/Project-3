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
            <div className="flex justify-center">
      <div className="flex person-container w-50 h-50 bg-green-100 rounded-md justify-center p-2">
        <form className="w-30 bg-green-100 border-none rounded-2xl">
          <div className="m-3 flex row flex-wrap">
            <div className="input-1 m-2 flex-col">
              <label htmlFor="first-name"></label>
              <input className="input m-1" type="text" name="first" placeholder="First Name" />
              <label htmlFor="email"></label>
              <input className="input m-1" type="text" name="last" placeholder="Last Name" />
              <label htmlFor="last name"></label>
              <input className="input m-1" type="date" name="birthdate" placeholder="Birthdate" />
            </div>
            <div className="input-2 m-2 flex-col">
              <label htmlFor="relationship"></label>
              <input className="input m-1" type="text" name="relationship" placeholder="Relationship" />
              <label htmlFor="anniversary"></label>
              <input className="input m-1" type="date" name="anniversary" placeholder="Anniversary" />
              <label htmlFor="special-occasion"></label>
              <input className="input m-1" type="text" name="special" placeholder="Special Occasion" />
            </div>
          </div>
          <div className="flex justify-center">
          <img className="icon w-42 h-36 m-2 flex" src={imagePh} alt="pic"></img>
          </div>
          
          <div className="footer">
          <button onClick={() => history.push('/userpage')}  type="button" className="btn-rg">
            Add
          </button>
        </div>
        </form>
       
      </div>
      </div>
      </div>
 
    );
  }

export default AddPerson;