import React, { useEffect, useState } from "react";
import "./new.scss";
import userimg from "../Images/user.png";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, getStorage, storage } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function New({ input, title, button }) {
  const [file, setFile] = useState();
  const [data, setData] = useState({});
  const [per,setPer] = useState();

  useEffect(() => {
    const fileUpload = () => {
      const name = new Date().getTime() + file.name;
      console.log(name);
      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPer(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log('File available at', downloadURL);
            setData((prev) => ({ ...data, img: downloadURL }));
          });
        }
      );
    };

    file && fileUpload();
  }, [file]);

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  // console.log(data);
  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await setDoc(
        doc(db, "users", res.user.uid),
        {
          ...data,
          timeStemp: serverTimestamp(),
        },
        console.log(res)
      );
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(data);

  // console.log(file)
  return (
    <>
      <div className="newContainer">
        <div className="top">
          <h1 className="addTitle">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : userimg} alt="Imag" />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  hidden
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {input.map((item) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{item.label}</label>
                    <input
                      id={item.id}
                      type={item.type}
                      placeholder={item.placeholder}
                      onChange={handleChange}
                    />
                  </div>
                );
              })}

              <button type="submit" disabled={per !== null & per<100}>{title}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default New;
