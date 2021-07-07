import React, { useState, useEffect }  from "react";
import Axios from 'axios';



// export class Login extends React.Component {

    // tsConstructorType(props) {
    //     super(props);
    // }

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitLogin = () => {
    Axios.post('http://localhost:3001/api/login', {
        username: username, password: password,
    }).then(() => {
        alert('front end login submit worked')
    })
    };

    // render() {
        return ( <div className="container">
            <div className="header">Login</div>
            <div className="content">
                {/* <div className="image">
                    <img src={loginImg} />
                </div> */}
                <div className="form">
                    <div className="form-group">
                        <lable htmlFor="username">Username:  </lable>
                        <input type="text" name="username" placeholder="username" value={username} onKeyUp={ e => setUsername(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <lable htmlFor="password">Password:  </lable>
                        <input type="password" name="password" placeholder="password" value={password} onKeyUp={ e => setPassword(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick = {submitLogin}>
                    Lo
                </button>
            </div>
        </div>
        )
}

export default Login;