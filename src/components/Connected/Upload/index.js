import React, { useState } from 'react';
import axios from 'axios';
import'./styles.scss';



const Upload = ({ id }) => {
    const [fileToUpload, setFileToUpload] = useState(null);
    const data = new FormData();
    data.append('picture_file', fileToUpload);
    const onSubmitFile = () => {
      axios({
        method: 'PUT',
        url: `https://localhost.3001.`,
        data,
      })
        .then((response) => {
          console.log('la reponse', response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
        <div className="upload">
      <form
        className="upload"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmitFile();
        }}
      >
        <div className="upload-box">
          {/* <label className="label">Image Avatar</label> */}
          <input
            type="file"
            accept="image/*"
            name="picture_file"
            className="upload-select"
            onChange={(event) => {
              setFileToUpload(event.target.files[0]);
            }}
          />
        </div>
        <button className="upload-button" type="submit">Envoyer</button>
      </form>
      </div>
    );
  };
  export default Upload;