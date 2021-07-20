import { useHistory } from 'react-router-dom';
import React, { useState }  from "react";
import imagePh from '../image-ph.png';
import Axios from 'axios';



function AddPerson () {

  const history = useHistory();

  const [newPerson, setNewPerson] = useState({
    first_name: "",
    last_name: "",
    relationship: "",
    birthdate: "",
    phone_number: "",
    special_occasion: "",
  });

   const handleSubmit = event => {
        event.preventDefault();
        console.log(newPerson);

        Axios.post('/api/person', {
        first_name: newPerson.first_name,
        last_name: newPerson.last_name,
        relationship: newPerson.relationship,
        birthdate: newPerson.birthdate, 
        phone_number: newPerson.phone_number, 
       special_occasion: newPerson.special_occasion,
          
       headers: {
        'content-Type': 'application/json'
    },
    withCredentials: true

    }).then(() => {
        alert('add person worked')
    })
    };


    return (
        <div>
            <nav className='add w-100 h-24 border-2'>
                <h1 className='m-4 text-6xl'>Add Person</h1>
            </nav> 
            <div className="flex justify-center">
      <div className="flex person-container w-50 h-50 bg-green-100 rounded-md justify-center p-2">
        <form className="w-30 bg-green-100 border-none rounded-2xl" onSubmit={handleSubmit}>
          <div className="m-3 flex row flex-wrap">
            <div className="input-1 m-2 flex-col">
              <label htmlFor="first-name"></label>
              <input className="input m-1" 
              name="first_name" 
              type="text" required
              placeholder="First Name" 
              onChange={(e) =>
                setNewPerson({ ...newPerson, first_name: e.target.value })
              }/>
              <label htmlFor="email"></label>
              <input className="input m-1" 
              type="text" name="last_name" 
              placeholder="Last Name"  
              onChange={(e) =>
                setNewPerson({ ...newPerson, last_name: e.target.value })} />
              <label htmlFor="last name"></label>
              <input className="input m-1" 
              type="date" 
              name="birthdate" 
              placeholder="Birthdate" 
               onChange={(e) =>
                setNewPerson({ ...newPerson, birthdate: e.target.value })
              }/>
            </div>
            <div className="input-2 m-2 flex-col">
              <label htmlFor="relationship"></label>
              <input className="input m-1" 
              type="text" name="relationship" 
              placeholder="Relationship" 
              onChange={(e) =>
                setNewPerson({ ...newPerson, relationship: e.target.value })
              }/>

              <label htmlFor="phone_name"></label>

              <label htmlFor="anniversary"></label>

              <input className="input m-1" 
              type="text" name="phone_number" 
              placeholder="Phone Number" 
              onChange={(e) =>
                setNewPerson({ ...newPerson, phone_number: e.target.value })
              }/>

              

              <label htmlFor="special-occasion"></label>

              <input className="input m-1" 
              type="date" name="special_occasion" 
              placeholder="Special Occasion" 
              onChange={(e) =>
                setNewPerson({ ...newPerson, special_occasion: e.target.value })
              }/>

            </div>
          </div>
          <div className="flex justify-center">
          <img className="icon w-42 h-36 m-5 flex" src={imagePh} alt="pic"></img>
          </div>
          
          <div className="footer">
          <button type="submit" className="btn-rg">
          {/* onClick={() => history.push('/userpage')}  */}
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