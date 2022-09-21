import React from "react";
import styles from "../Modules/firsttop.module.css";
import { Link } from "react-router-dom";

const SecondTop = ({colColor}) => {
  return (
    <>
      <div className={styles.display}>
        <span>
          <Link to="/home">
            <i class="fa-solid fa-house"></i>
          </Link>
        </span>
        <span>
          <Link to="/collection" className={colColor}>
            <i class="fa-solid fa-images"></i>
          </Link>
        </span>
      </div>
    </>
  );
};

export default SecondTop;
