import React from 'react';
import addUser from '../placeholder.png'
import text from '../text.png'
import video from '../video.jpeg'

function clicked() {
    console.log("i clicked")
}

function People() {
    return (
        <div className="">
            <img className="icon w-32 h-32 border-1 mt-5 ml-5" src={addUser} alt="dFVDVS"></img>
            <div className="ml-5">
                <button>
                    <img onClick={clicked()} className="icon w-10 h-10 border-1" src={text} alt="text"></img>
                </button>
                <button>
                    <img className="icon w-15 h-10 border-1" src={video} alt="video"></img>
                </button>
            </div>
        </div>
    )
}



export default People