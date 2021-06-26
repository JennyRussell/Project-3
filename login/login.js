import React from "react";




export class Login extends React.Component {

    // tsConstructorType(props) {
    //     super(props);
    // }

    render() {
        return <div className="container">
            <div className="header">Login</div>
            <div className="content">
                {/* <div className="image">
                    <img src={loginImg} />
                </div> */}
                <div className="form">
                    <div className="form-group">
                        <lable htmlFor="username">Username:  </lable>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <lable htmlFor="password">Password:  </lable>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Login
                </button>
            </div>
        </div>
    }
}