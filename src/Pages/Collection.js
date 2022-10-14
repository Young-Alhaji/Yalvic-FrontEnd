import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../Components/Navbar";
import SecondTop from "../Components/SecondTop";
import ThirdTop from "../Components/ThirdTop";
import styles from "../Modules/collection.module.css";
const Collection = () => {

  const styleNoReg={
    fontWeight: "bold",
    color: 'deeppink',
    fontSize: '150%',
    textAlign: 'center',
}
  let userId = JSON.parse(localStorage.userId);
  const [message, setmessage] = useState("");
  const [loading, setloading] = useState(false);
  const [eachDesign, seteachDesign] = useState([]);
  const [addedIndex, setaddedIndex] = useState([]);
  const [detailIndex, setdetailIndex] = useState(0);
  let endpoint = "https://yalbble-app.herokuapp.com/fileuload/collectionspage";
  let endpoint2 ="https://yalbble-app.herokuapp.com/fileuload/deletecollection";

  useEffect(() => {
    loadDesigns();
  }, []);

  const loadDesigns = () => {
    setmessage("");
    setloading(true);
    let user = { userId };
    axios.post(endpoint, user).then((res) => {
      console.log(res);
      setloading(false);
      seteachDesign(res.data.result);
    });
  };

  const remove = (index) => {
    let filteredArray = eachDesign.find((item, ind) => index == ind);
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
      <SecondTop colColor="text-white" />
      <center>
        <div className={styles.heading}>My Collection</div>
      </center>
      <ThirdTop />
      <div className={styles.mapdisplay}>
        {loading ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) :
        (eachDesign.length==0? <div style={styleNoReg}> You do not have any personal designs in your Collection</div>:
         (
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
        ))}
      </div>
    </>
  );
};

export default Collection;
