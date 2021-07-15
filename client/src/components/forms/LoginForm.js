import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useInput } from '../hooks/input-hook';

import Axios from 'axios'


export function LoginForm(props) {


    const handleSubmit = event => {
        event.preventDefault();
        //console.log(event);
        const email = event.target[0].value
        const password = event.target[1].value
        Axios.post('http://localhost:3001/login', {
            email,
            password
        }).then((response) => {
            alert('front end login submit worked')
            console.log(response)
        })
    };


    return (
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
            {/* onClick={() => history.push('/userpage')}  */}
            <input type="submit" value="Login" className="login-btn rounded w-20 h-10 bg-pink-400 text-white mt-2"></input>
        </form>
    )
}