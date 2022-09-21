import React from "react";
import styles from "../Modules/firsttop.module.css";
import { Link } from "react-router-dom";

const FirstTop = ({viewcolor,homecolor}) => {
  function opentab() {
    document.getElementById("mySidenav").style.width = "280px";
  }
  return (
    <>
      <div className={styles.display}>
        <span onClick={opentab} className={styles.black}>
          &#9776;
        </span>
        <span>
          <Link to="/home" className={homecolor}>
            <i class="fa-solid fa-house"></i>
          </Link>
        </span>
        <span>
          <Link to="/viewlist" className={viewcolor}>
            <i class="fa-solid fa-eye"></i>
          </Link>
        </span>
      </div>
    </>
  );
};

export default FirstTop;
