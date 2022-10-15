import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import styles from "../Modules/home.module.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import FirstTop from "../Components/FirstTop";
import ThirdTop from "../Components/ThirdTop";
import { useEffect } from "react";
import axios from "axios";
import Footer from "../Components/Footer";

const Home = () => {
  const [message, setmessage] = useState("");
  const [loading, setloading] = useState(false);
  const [eachDesign, seteachDesign] = useState([]);
  const [addedIndex, setaddedIndex] = useState([]);
  const [detailIndex, setdetailIndex] = useState(0);
  let endpoint = "https://yalbble-app.herokuapp.com/fileuload/home";
  let endpoint2 = "https://yalbble-app.herokuapp.com/viewlists/addviewlist";
  let currentuser = JSON.parse(localStorage.userId);
  let navigate = useNavigate();
  useEffect(() => {
    setmessage("");
    setloading(true);
    axios.get(endpoint).then((res) => {
      setloading(false);
      seteachDesign(res.data.result);
      console.log(res.data.result);
    });
  }, []);

  const add = (index) => {
    let filteredArray = eachDesign.find((item, ind) => index == ind);
    filteredArray.currentuser = currentuser;
    console.log(filteredArray);
    axios.post(endpoint2, filteredArray).then((res) => {
      setmessage(res.data.message);
      setTimeout(function () {
        setmessage("");
      }, 2000);
    });
  };

  const detail = (index) => {
    setdetailIndex(index);
  };

  return (
    <>
      {message !== "" ? <div className={styles.modaltext}>{message}</div> : ""}
      <Navbar />
      <FirstTop homecolor="text-white" />
      <div className={styles.heading}>U.I Designs</div>
      <ThirdTop />
      <div className={styles.mapdisplay}>
        {loading ? (
          <div class="d-flex justify-content-center">  <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br />
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
                  <span>
                    <img
                      className={styles.lilimg}
                      src={item.profilePicture}
                      alt=""
                    />
                  </span>{" "}
                  &nbsp;
                  <span>{item.username}</span>
                </div>
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
                    onClick={() => add(index)}
                  >
                    Add to Viewlist
                  </button>
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
                            <div>
                              <span className={styles.pinkcolor}>
                                {eachDesign[detailIndex].category}
                              </span>{" "}
                              <br />
                              {eachDesign[detailIndex].tag} <br />
                              <span>
                                <img
                                  className={styles.lilimg}
                                  src={eachDesign[detailIndex].profilePicture}
                                  alt=""
                                />
                              </span>{" "}
                              &nbsp;
                              <span className={styles.pinkcolor}>
                                {eachDesign[detailIndex].username}
                              </span>
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
                        <div>
                          <span>
                            <img
                              className={styles.footerimg}
                              src={eachDesign[detailIndex].profilePicture}
                              alt=""
                            />
                          </span>{" "}
                          <br /> <br />
                          <span  className={styles.footerusername}>{eachDesign[detailIndex].username}</span>
                        </div> <br />
                        <div >
                        <a className={styles.mail} href={"mailto:" + eachDesign[detailIndex].email}><span><i class="fa-solid fa-envelope"></i></span>Hire Me</a>
                        </div> <br />
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-primary w-75"
                            onClick={() => add(detailIndex)}
                          >
                            Add to Viewlist
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
      </div> <br /><br /><br />
      <Footer/>
    </>
  );
};

export default Home;
