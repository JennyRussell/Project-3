import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useInput } from '../hooks/input-hook';
import { login } from '../../utils/AUTH';



export function LoginForm(props){

    // const history = useHistory();  
    const { value:email, bind:bindEmail, reset:resetEmail} = useInput('');
    const { value:password, bind:bindPassword, reset:resetPassword} = useInput('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(`Submitting Email: ${email} and Password: ${password}`);
        resetEmail();
        resetPassword();
        const something = login ("abc", "password"); 

        //1. You need to get the axios response and get the auth token.
        //1.2 store the auth token in your session so you can use it for future calls
        //1.3 clear the token after sometime, or logout. 
        //2. All future API requests need to use the AuthToken to validate future requests. 

        if(something !== undefined) {
            let {history} = props;
            history.push("/userpage")
        }
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
                    type="password" required {...bindPassword}
                     className="password border-2 w-40 h-10 bg-white m-2" placeholder="Password"></input>
            </label>
                {/* onClick={() => history.push('/userpage')}  */}
            <input type="submit" value="Login" className="login-btn rounded w-20 h-10 bg-pink-400 text-white mt-2"></input>
        </form>
    )
}