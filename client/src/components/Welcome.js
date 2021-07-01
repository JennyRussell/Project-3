import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./welcome.css"
import forgetmenots from "./forgetmenots.png";
import bdaycake from "./bdaycake.png";
import graduation from "./graduation.png";
import champagne from "./champagne.png";
import { useHistory } from 'react-router-dom';



function Welcome() {
    const history = useHistory();  

    return (
        <div>
            <nav className="navigation flex justify-between bg-green-100">
                <div className="row">
                <img className="icon w-24 h-24 m-3 border-1 mr-4" src={bdaycake} alt=""></img>
                <img className="icon w-24 h-24 border-1 m-3 mr-4" src={graduation} alt=""></img>
                <img className="icon w-24 h-24 border-1 m-3" src={champagne} alt=""></img>
                </div>
<div className="mr-5">
                <form className="input-group mr-2 mt-10">
                <label className="label" htmlFor="email">
                <input className="email border-2 w-40 h-10 bg-white m-2" placeholder="Email"></input>
                </label>
                <label className="label" htmlFor="password">
                <input className="password border-2 w-40 h-10 bg-white m-2" placeholder="Password"></input>
                </label>
                <button onClick={() => history.push('/userpage')} className="login-btn rounded w-20 h-10 bg-pink-400 text-white mt-2">Login</button>
                </form>
                </div>
            </nav>
            <div className="jumbotron text-white" style={{ backgroundImage: `url(${forgetmenots})` }}>
                <div className="bg-pink-400">
                <h1 className="text-8xl flex justify-center mt-28">Forget Me Not</h1>
                <p className="text-4xl">Never forget a special occasion again!</p>
                </div>
            
            </div>
            <div className="flex row justify-around bg-green-100 pt-10 w-100">
            <img className="icon w-48 h-48 m-4 border-1 mt-4" src={bdaycake} alt=""></img>
            <p className="feature-text w-3/4 mt-26 text-left mr-5 p-4 text-pink-400 bg-white rounded-2xl">Never forget a birthday, anniversary, graduation, or any other special occasion when you set up text and email reminders for the special people in your life.</p>
                
            </div>
            <div className="flex row justify-around bg-green-100 w-100">
            <img className="icon w-48 h-48 m-4 border-1 mt-4" src={graduation} alt=""></img>
            <p className="feature-text w-3/4 mt-26 text-left mr-5 p-4 text-pink-400 bg-white rounded-2xl">Add all your favorite people and their special dates to your user profile page. View all upcoming special occasions on a calendar.</p>
                
            </div>
            <div className="flex row justify-around bg-green-100 w-100">
            <img className="icon w-48 h-48 m-4 border-1 mt-4" src={champagne} alt=""></img>
            <p className="feature-text w-3/4 mt-26 text-left mr-5 p-4 text-pink-400 bg-white rounded-2xl">Call that special someone on video chat to tell them you are thinking about them or send a personalized text message.</p>
                
            </div>
            <div className="bg-green-100 p-10">
                <button onClick={() => history.push('/signup')} className="sign-up-btn button w-50 h-36 bg-pink-400 rounded-2xl text-6xl text-white">Click Here To Sign Up!</button>
            </div>
        </div>
       
    )
}

export default Welcome;