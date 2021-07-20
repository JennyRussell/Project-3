import React from "react";
import addUser from "../placeholder.png";
import text from "../text.png";
import video from "../video.jpeg";
import { useHistory } from "react-router-dom";
import vid from "../Vid";

// when the user's person info renders with all their dates and add btn
// on submit triggers put request to the database to update user's events
// this way, when the user goes back to their calendar page, the new event will populate
function People() {
  const clicked = () => {
    console.log("clicked!");
    //trigger the profile page to populate
  };
  let history = useHistory();

  const redirect = () => {
    history.push('/text')
  }

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
            onClick={redirect}
            className="icon w-10 h-10 border-1 button btn"
            src={text}
            alt="text"
          ></img>
        </button>
        <button onClick={() => history.push("/Vid")}>
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
