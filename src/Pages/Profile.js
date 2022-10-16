import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import styles from "../Modules/profile.module.css";
import FirstTop from "../Components/FirstTop";
import ThirdTop from "../Components/ThirdTop";
import SecondTop from "../Components/SecondTop";
import axios from "axios";

const Profile = () => {
  let endpoint = "https://yalbble-app.herokuapp.com/auth/profilepage";
  let endpoint2 ='https://yalbble-app.herokuapp.com/auth/profileUpdate'
  let userId = JSON.parse(localStorage.userId);
  const [message, setmessage] = useState("");
  const [loading, setloading] = useState(false);
  const [file, setfile] = useState("");
  const [details, setdetails] = useState('')

  const getFile = (e) => {
    const myFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(myFile);
    reader.onload = () => {
      setfile(reader.result);
      console.log(file)
    };
  };

  useEffect(() => {
    loadPage()
  }, []);

  const loadPage = () => {
    setloading(true);
    let user = { userId };
    axios.post(endpoint, user).then((res) => {
      console.log(res.data.result.profilePicture);
      localStorage.profilePicture= JSON.stringify(res.data.result.profilePicture)
      setloading(false);
      setdetails(res.data.result)
    });
    setTimeout(function () {
      setmessage("");
    }, 3000);
  };


  const update =()=>{
    setmessage("");
    setloading(true);
    let user ={userId,file}
    axios.post(endpoint2,user).then((res)=>{
      console.log(res);
      setloading(false);
      setmessage(res.data.message)
      loadPage()
    })
  }
  return (
    <>
      <Navbar />
      <SecondTop />
      <div className={styles.heading}>Profile Page</div>
      <ThirdTop /> <br />
     
      {loading ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
            <center>
              {message !== "" ? (
              <div className={styles.requiredtext}>{message}</div>
            ) : (
              ""
            )}
        <div className={styles.body}>
          <div className={styles.picturediv}>
            <div>
              <i
                class="fa-solid fa-user"
                style={{ marginTop: "30px", fontSize: "700%" }}
              ></i>
            </div>
            <div>
              <img className={styles.image} src={details.profilePicture} />
            </div>
            <button
              className={styles.edit}
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
          <br />
          <div className={styles.cover}>
            <label className={styles.label}>Username:</label>
            <p className={styles.p}>{details.username}</p>
          </div>
          <br />
          <div className={styles.cover}>
            <label className={styles.label}>Name:</label>
            <p className={styles.p}>{details.fullname}</p>
          </div>
          <br />
          <div className={styles.cover}>
            <label className={styles.label}>Email:</label>
            <p className={styles.p}>{details.email}</p>
          </div>
          <br />
        </div>
        <br />
      </center>
      
      )}
      {/* modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <div>Edit Profile Photo</div>
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input
                type="file"
                class="form-control my-4"
                onChange={(e) => getFile(e)}
              /> <br />
            
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary "
                data-dismiss="modal"
                onClick={update}
              >
                Update
              </button>{" "}
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Profile;
