import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useInput } from '../hooks/input-hook';



export function LoginForm(props){
    // const history = useHistory();  
    const { value:email, bind:bindEmail, reset:resetEmail} = useInput('');
    const { value:password, bind:bindPassword, reset:resetPassword} = useInput('');


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting Email: ${email} and Password: ${password}`);
        resetEmail();
        resetPassword();
       

    }


    return(
        <form className="input-group mr-2 mt-10" onSubmit={handleSubmit}>
         <label className="label" htmlFor="email">
                <input 
                type="text" required {...bindEmail}
                className="email border-2 w-40 h-10 bg-white m-2" placeholder="Email"></input>
                </label>
                <label className="label" htmlFor="password">
                <input 
                 type="text" required {...bindPassword}
                className="password border-2 w-40 h-10 bg-white m-2" placeholder="Password"></input>
                </label>
                {/* onClick={() => history.push('/userpage')}  */}
                <input type="submit" value="Login" className="login-btn rounded w-20 h-10 bg-pink-400 text-white mt-2"></input>
                </form>
    )
}