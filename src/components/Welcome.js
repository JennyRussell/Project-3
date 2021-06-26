import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./welcome.css"
import forgetmenots from "./forgetmenots.png";
import bdaycake from "./bdaycake.png";
import graduation from "./graduation.png";
import champagne from "./champagne.png";



function Welcome() {
    

    return (
        <div>
            <nav className="navigation flex row justify-around bg-green-100">
                <div className="row m-2 p-2 w-1/2 justify-start">
                <img className="icon w-24 h-24 m-2 border-1" src={bdaycake}></img>
                <img className="icon w-24 h-24 border-1 m-2" src={graduation}></img>
                <img className="icon w-24 h-24 border-1 m-2" src={champagne}></img>
                </div>
<div className="flex justify-end">
                <form className="input-group mr-2 mt-10">
                
                <div className="email border-2 w-40 h-10 bg-white m-2" label="Email"></div>
               
                <div className="password border-2 w-40 h-10 bg-white m-2" label="Password"></div>
         
                <button className="login-btn rounded w-20 h-10 bg-pink-400 text-white m-2">Login</button>
                </form>
                </div>
            </nav>
            <div className="jumbotron text-white" style={{ backgroundImage: `url(${forgetmenots})` }}>
                <div className="bg-pink-400">
                <h1 className="text-8xl flex justify-center mt-28">Forget Me Not</h1>
                <p className="text-4xl">Never forget a special occasion again!</p>
                </div>
            
            </div>
            <div className="feature-container flex row justify-around bg-green-100 pt-10">
            <img className="icon w-48 h-48 m-2 border-1 ml-5 mt-4" src={bdaycake}></img>
            <p className="feature-text w-3/4 mt-26 text-left mr-5 p-4 text-pink-400 bg-white rounded-2xl">Never forget a birthday, anniversary, graduation, or any other special occasion when you set up text and email reminders for the special people in your life.</p>
                
            </div>
            <div className="feature-container flex row justify-around bg-green-100">
            <img className="icon w-48 h-48 m-2 border-1 ml-5 mt-4" src={graduation}></img>
            <p className="feature-text w-3/4 mt-26 text-left mr-5 p-4 text-pink-400 bg-white rounded-2xl">Add all your favorite people and their special dates to your user profile page. View all upcoming special occasions on a calendar.</p>
                
            </div>
            <div className="feature-container flex row justify-around bg-green-100">
            <img className="icon w-48 h-48 m-2 border-1 ml-5 mt-4" src={champagne}></img>
            <p className="feature-text w-3/4 mt-26 text-left mr-5 p-4 text-pink-400 bg-white rounded-2xl">Call that special someone on video chat to tell them you are thinking about them or send a personalized text message.</p>
                
            </div>
            <div className="bg-green-100 p-10">
                <button className="sign-up-btn button w-50 h-36 bg-pink-400 rounded-2xl text-6xl text-white">Click Here To Sign Up!</button>
            </div>
        </div>
       
    )
}

export default Welcome;