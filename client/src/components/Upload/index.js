import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "../login/style.css";

function Upload() {
  const [image, setImage] = useState([]);

  let history = useHistory();

  const upload = () => {
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "");
    Axios.post(formData).then((response) => {
      const fileName = response.data.public_id;

      Axios.post("http://localhost:3001/upload", {
        image: fileName,
        author: localStorage.getItem("username"),
      }).then(() => {
        history.push("/");
      });
    });
  };
  return (
    <div className="Upload">
      <div className="UploadForm">
        <input
          className="img-btn"
          type="file"
          onChange={(e) => setImage(e.target.files)}
        />
        <button className="img-btn" onClick={upload}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default Upload;
