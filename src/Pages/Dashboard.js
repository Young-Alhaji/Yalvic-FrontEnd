import React from "react";
import FirstTop from "../Components/FirstTop";
import Navbar from "../Components/Navbar";
import SecondTop from "../Components/SecondTop";
import ThirdTop from "../Components/ThirdTop";
import styles from "../Modules/dashboard.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate()
  const goHome=()=>{
    navigate('/home')
  }
  const goCollection=()=>{
    navigate('/collection')
  }
  const goView=()=>{
    navigate('/viewlist')
  }
  const goProfile=()=>{
    navigate('/profile')
  }
  return (
    <>
      <div>
        <Navbar />
        <SecondTop />
        <div className={styles.hi}>Dashboard</div>
        <ThirdTop />
      </div>
      <div>
        <div className={styles.display}>
          <button className={styles.box} 
          onClick={goHome}>
           Home <br /> <br /><i
              class="fa-solid fa-house"
              style={{ fontSize: "200%" }}
            ></i>
          </button>

          <button className={styles.box}
           onClick={goCollection}>
            My Collection <br /><br /> <i
              class="fa-solid fa-images"
              style={{ fontSize: "200%" }}
            ></i>
          </button>
          <button className={styles.box}
           onClick={goView}>
           My Viewlist <br /><br /> <i
              class="fa-solid fa-eye"
              style={{fontSize: "200%" }}
            ></i>
          </button>
          <button className={styles.box}
           onClick={goProfile}>
            My Profile <br /><br /> <i
              class="fa-solid fa-user"
              style={{fontSize: "200%" }}
            ></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
