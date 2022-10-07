import React from "react";
import { useState, useEffect } from "react";
import FirstTop from "../Components/FirstTop";
import Navbar from "../Components/Navbar";
import ThirdTop from "../Components/ThirdTop";
import styles from "../Modules/viewlist.module.css";
import axios from "axios";
const Viewlist = () => {
  let endpoint = "https://yalbble-app.herokuapp.com/viewlists/getviewlists";
  let endpoint2 = ""
  let userId = JSON.parse(localStorage.userId)
  const [message, setmessage] = useState("");
  const [loading, setloading] = useState(false);
  const [eachDesign, seteachDesign] = useState([]);


  useEffect(() => {
    setmessage("");
    setloading(true);
    let userId = JSON.parse(localStorage.userId)
    let user={userId}
    console.log(user)
    axios.post(endpoint,user).then((res) => {
      setloading(false);
      seteachDesign(res.data.result);
      console.log(res);
    });
  }, []);


  const remove = (index) => {
    let filteredArray = eachDesign.find((item, ind) => index == ind);
    filteredArray.currentuser= userId
    console.log(filteredArray)
    axios.post(endpoint2, filteredArray).then((res) => {
      setmessage(res.data.message);
      setTimeout(function () {
        setmessage("");
      }, 2000);
    });
  };

  return (
    <>
      {message !== "" ? <div className={styles.modaltext}>{message}</div> : ""}
      <Navbar />
      <FirstTop viewcolor="text-white" />
      <div className={styles.heading}>My Viewlist</div>
      <ThirdTop />

      <div className={styles.mapdisplay}>
        {loading ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          eachDesign.map((item, index) => (
            <div key={item._id} className={styles.card}>
              <div>
                <img className={styles.img} src={item.file} alt="" />{" "}
              </div>
              <div>{item.category}</div>
              <div className={styles.pinkcolor}>{item.tag}</div>
              <div>
                <button
                  className={styles.detailsbutton}
                >
                  Details
                </button>{" "}
                <br />
                <button className={styles.addbutton}
                 onClick={() => remove(index)}
                >Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Viewlist;
