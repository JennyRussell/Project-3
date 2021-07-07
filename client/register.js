import React, { useState, useEffect }  from "react";
import Axios from 'axios';



function Register() {

    const submitRegister = event => {
        event.preventDefault();
        console.log('test submit');
    Axios.post('http://localhost:3001/api/register', {
        firstName: firstName, lastName: lastName, email: email, password: password,
        birthdate: birthdate, gender: gender, phoneNumber: phoneNumber, anniversary: anniversary,
        relationship: relationship, username: username,
    }).then(() => {
        alert('front end register submit worked')
    })
    };

    document.getElementById('regButton').addEventListener('click', submitRegister())

    // tsConstructorType(props) {
    //     super(props);
    // }

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [gender, setGender] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [anniversary, setAnniversary] = useState('')
    const [relationship, setRelationship] = useState('')
    const [username, setUsername] = useState('')

    

    return (
        <div className="rg-container">
            <div className="rg-header">Register</div>
            <div className="rg-content">
                {/* <div className="image">
                    <img src={loginImg} />
                </div> */}
                <div className="form">
                    <div className="first-name">
                        <lable htmlFor="first-name"></lable>
                        <input type="text" name="first" placeholder="First Name" value={firstName} onKeyUp={ e => setFirstName(e.target.value)}/>
                    </div>
                    <div className="last-name">
                        <lable htmlFor="last-name"></lable>
                        <input type="text" name="last" placeholder="Last Name" value={lastName} onKeyUp={ e => setLastName(e.target.value)}/>
                    </div>
                    <div className="form-group-rg">
                        <lable htmlFor="email"></lable>
                        <input type="email" name="email" placeholder="Email" value={email} onKeyUp={ e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group-rg">
                        <lable htmlFor="password"></lable>
                        <input type="password" name="password" placeholder="Password" value={password} onKeyUp={ e => setPassword(e.target.value)}/>
                    </div>
                    <div className="birthdate">
                        <lable htmlFor="birthdate"></lable>
                        <input type="text" name="birthdate" placeholder="Birthdate" value={birthdate} onKeyUp={ e => setBirthdate(e.target.value)}/>
                    </div>
                    <div className="gender">
                        <lable htmlFor="gender"></lable>
                        <input type="text" name="gender" placeholder="Gender" value={gender} onKeyUp={ e => setGender(e.target.value)}/>
                    </div>
                    <div className="phone">
                        <lable htmlFor="phone"></lable>
                        <input type="text" name="phone" placeholder="Phone Number" value={phoneNumber} onKeyUp={ e => setPhoneNumber(e.target.value)}/>
                    </div>
                    <div className="anniversary">
                        <lable htmlFor="anniversary"></lable>
                        <input type="text" name="anniversary" placeholder="Anniversary Date" value={anniversary} onKeyUp={ e => setAnniversary(e.target.value)}/>
                    </div>
                    <div className="relationship">
                        <lable htmlFor="relationship"></lable>
                        <input type="text" name="relationship" placeholder="Relationship" value={relationship} onKeyUp={ e => setRelationship(e.target.value)}/>
                    </div>
                    <div className="form-group-rg">
                        <lable htmlFor="username"></lable>
                        <input type="text" name="username" placeholder="Username" value={username} onKeyUp={ e => setUsername(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button id = 'regButton' type="button" className="btn-rg">
                    C
                </button>
            </div>
        </div>
    )
}

export default Register;