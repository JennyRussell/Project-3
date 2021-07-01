import React from "react";
import addUser from "../placeholder.png";
import text from "../text.png";
import video from "../video.jpeg";

// when the user's person info renders with all their dates and add btn
// on submit triggers put request to the database to update user's events
// this way, when the user goes back to their calendar page, the new event will populate
function People() {
  const clicked = () => {
    console.log("clicked!");
    //trigger the profile page to populate
  };
  return (
    <div className="">
      <img
        className="icon w-32 h-32 border-1 mt-5 ml-5"
        src={addUser}
        alt="dFVDVS"
      ></img>
      <div className="ml-5">
        <button>
          <img
            onClick={clicked()}
            className="icon w-10 h-10 border-1"
            src={text}
            alt="text"
          ></img>
        </button>
        <button>
          <img
            className="icon w-15 h-10 border-1"
            src={video}
            alt="video"
          ></img>
        </button>
      </div>
    </div>
  );
}

export default People;
