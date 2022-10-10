import React from "react";
import { useState, useEffect } from "react";
import FirstTop from "../Components/FirstTop";
import Navbar from "../Components/Navbar";
import ThirdTop from "../Components/ThirdTop";
import styles from "../Modules/viewlist.module.css";
import axios from "axios";
const Viewlist = () => {
  let endpoint = "https://yalbble-app.herokuapp.com/viewlists/getviewlists";
  let endpoint2 = "https://yalbble-app.herokuapp.com/viewlists/deleteviewslist";
  let currentuser = JSON.parse(localStorage.userId);
  const [message, setmessage] = useState("");
  const [loading, setloading] = useState(false);
  const [eachDesign, seteachDesign] = useState([]);
  const [detailIndex, setdetailIndex] = useState(0);

  useEffect(() => {
    loadDesigns();
  }, []);

  const loadDesigns = () => {
    setmessage("");
    setloading(true);
    let currentuser = JSON.parse(localStorage.userId);
    let user = {currentuser};
    console.log(user);
    axios.post(endpoint, user).then((res) => {
      setloading(false);
      seteachDesign(res.data.result);
      console.log(res);
    });
  };

  const remove = (index) => {
    let filteredArray = eachDesign.find((item, ind) => index == ind);
    filteredArray.currentuser = currentuser;
    console.log(filteredArray);
    axios.post(endpoint2, filteredArray).then((res) => {
      setmessage(res.data.message);
      setTimeout(function () {
        setmessage("");
      }, 2000);
    });
    loadDesigns();
  };

  const detail = (index) => {
    setdetailIndex(index);
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
          eachDesign
            .map((item, index) => (
              <div key={item._id} className={styles.card}>
                <div>
                  <img className={styles.img} src={item.file} alt="" />{" "}
                </div>
                <div>{item.category}</div>
                <div className={styles.pinkcolor}>{item.tag}</div>
                <div>
                  <button
                    data-toggle="modal"
                    data-target="#exampleModal"
                    className={styles.detailsbutton}
                    onClick={() => detail(index)}
                  >
                    Details
                  </button>{" "}
                  <br />
                  <button
                    className={styles.addbutton}
                    onClick={() => remove(index)}
                  >
                    Remove
                  </button>
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
                            <div>
                              <span className={styles.pinkcolor}>
                                {eachDesign[detailIndex].category}
                              </span>{" "}
                              <br />
                              {eachDesign[detailIndex].tag}
                            </div>
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
                          <img
                            className={styles.modalimg}
                            src={eachDesign[detailIndex].file}
                            alt=""
                          />{" "}
                          <br /> <br />
                          <br />
                          {eachDesign[detailIndex].description}
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-primary w-75"
                            onClick={() => remove(detailIndex)}
                            data-dismiss="modal"
                          >
                            Remove
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
                </div>
              </div>
            ))
            .reverse()
        )}
      </div>
    </>
  );
};

export default Viewlist;
