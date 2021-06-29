import React from "react";
import People from '../people/People'
import addUser from "../addUser.png"

function UserPage() {
    return (
        <div>
            <nav className='w-100 h-24 border-2'>
                <h1 className='m-4 text-6xl'>Welcome</h1>
            </nav>
            <div className='text-left'>
                <h1 className='m-5'>Hello, F-name L-name!</h1>
                <h1 className='ml-5'>My People:</h1>
            </div>
            <div className="flex">
                <People />
                <div className='ml-5'>
                    <img className="icon w-30 h-30 m-2 border-1 m-5" src={addUser} alt="DVBSB"></img>
                </div>
            </div>
        </div>
        
    )
}

export default UserPage