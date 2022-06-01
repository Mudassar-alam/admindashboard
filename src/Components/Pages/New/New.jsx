import React, { useState } from "react";
import "./new.scss";
import userimg from "../Images/user.png";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
function New({ input, title, button }) {

    const [file, setFile] = useState();

    console.log(file)
  return (
    <>
      <div className="newContainer">
        <div className="top">
          <h1 className="addTitle">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file? URL.createObjectURL(file) : userimg} />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" hidden onChange={(e)=>setFile(e.target.files[0])} />
              </div>
              {input.map((item) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{item.label}</label>
                    <input type={item.type} placeholder={item.placeholder} />
                  </div>
                );
              })}

              <button>{button}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default New;
