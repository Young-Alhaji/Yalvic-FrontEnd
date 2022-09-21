import React from "react";
import Navbar from "../Components/Navbar";
import FirstTop from "../Components/FirstTop";
import ThirdTop from "../Components/ThirdTop";
import styles from "../Modules/add.module.css";
import SecondTop from "../Components/SecondTop";
const AddDesign = () => {
  return (
    <>
      <div>
        <Navbar />
        <SecondTop/>
        <center>
          <div style={{ fontSize: "120%" }}>
            <i
              style={{ fontSize: "200%", margin: "10px 0px" }}
              class="fa-solid fa-circle-plus"
            ></i>{" "}
            <br />
          </div>
        </center>
        <ThirdTop />
      </div> <br />
      <center>
      <div class="row">
      <div class="col-9 mx-auto shadow">
        <div className={styles.input}>
        <input type="file" name="" placeholder="Design Image" class="form-control my-4"/>
        <input type="text" name="" placeholder="Category" class="form-control my-4"/>
        <input type="number" name="" placeholder="Design Tag/Name" class="form-control my-4"/>
        <textarea type="text" name="" placeholder="Description.....Not Cumpulsory" class="form-control my-4"></textarea>
        <button class="btn btn-primary w-75 mainbackcolor">Add</button>
        </div>
        <div></div>
      </div>
    </div>
      </center>
    </>
  );
};

export default AddDesign;
