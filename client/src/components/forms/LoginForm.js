import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useInput } from '../hooks/input-hook';


import Axios from 'axios'


export function LoginForm(props) {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    
    // const [loginStatus, setLoginStatus] = useState("");


    const handleSubmit = event => {
        event.preventDefault();
        //console.log(event);
        const email = event.target[0].value
        const password = event.target[1].value
        Axios.post('/api/login', {
            email,
            password,
            headers: {
                'content-Type': 'application/json'
            },
            withCredentials: true
        }).then((response) => {
            try
             { 
                if(response.status === 200) {
                   const {history} =  props;
                   history.push("/userpage");
             }
             }catch (err) {
                    console.log(err)
            }
        })
    };


    // const handleSubmit = event => {
    //     Axios.post('/api/login', {
    //   email: email,
    //   password: password,
    // }).then((response) => {
    //   if (response.data.message) {
    //     setLoginStatus(response.data.message);
    //   } else {
    //     setLoginStatus(response.data[0].username);
    //   }
    // });
    // };


    return (
        <div>
        <form className="input-group mr-2 mt-10" onSubmit={handleSubmit}>
            <label className="label" htmlFor="email">
                <input
                    type="text"
                    required
                    className="email border-2 w-40 h-10 bg-white m-2"
                    placeholder="Email"
                    name="email"
                />
            </label>
            <label className="label" htmlFor="password">
                <input
                    type="password"
                    required
                    className="password border-2 w-40 h-10 bg-white m-2"
                    placeholder="Password"
                     />
            </label>
            <input type="submit" value="Login" className="login-btn rounded w-20 h-10 bg-pink-400 text-white mt-2 pl-3"></input>
            </form>
            </div>
    )}

export default LoginForm;

