import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Modules/navbar.module.css";
const Navbar = ({ homecolor }) => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <>
      <div>
        <div id="mySidenav" className={styles.sidenav}>
          <div className={styles.closebtn} onClick={closeNav}>
            &times;
          </div>
          <i
            class="fa-solid fa-user"
            style={{ marginLeft: "80px", fontSize: "600%", color: "#f1f1f1" }}
          ></i>{" "}
          <br />
          <br />
          <Link className={homecolor} to="/home">
            <i
              class="fa-solid fa-house"
              style={{ marginRight: "15px", fontSize: "120%" }}
            ></i>
            <span>Home</span>
          </Link>
          <Link to="/dashboard">
            <i
              class="fa-solid fa-qrcode"
              style={{ marginRight: "15px", fontSize: "120%" }}
            ></i>
            <span style={{ marginLeft: "7px" }}>Dashboard</span>
          </Link>
          <Link to="/profile">
            <i
              class="fa-solid fa-user"
              style={{ marginRight: "15px", fontSize: "120%" }}
            ></i>
            <span style={{ marginLeft: "7px" }}>Profile </span>
          </Link>
          <Link to="/viewlist">
            <i
              class="fa-solid fa-eye"
              style={{ marginRight: "15px", fontSize: "120%" }}
            ></i>
            <span style={{ marginLeft: "0px" }}>ViewList</span>
          </Link>
          <Link to="/add">
            <i
              class="fa-solid fa-circle-plus"
              style={{ marginRight: "15px", fontSize: "120%" }}
            ></i>
            <span style={{ marginLeft: "2px" }}>Add Designs</span>
          </Link>
          <Link to="/collection">
            <i
              class="fa-solid fa-images"
              style={{ marginRight: "15px", fontSize: "120%" }}
            ></i>
            <span style={{ marginLeft: "0px" }}>My Collection</span>
          </Link>
          <Link to="/signin">
            <i
              class="fa-solid fa-right-from-bracket"
              style={{ marginRight: "15px", fontSize: "120%" }}
            ></i>
            <span style={{ marginLeft: "-2px" }}> Log Out</span>
          </Link>
        </div>
        <div className={styles.display}>
          <span className={styles.navicon} onClick={openNav}>
            <i class="fa-solid fa-user"></i>
          </span>

          <span className={styles.box2}>
            <Link to="/home">
              <h1 className={styles.h1}>
                <img className={styles.logo} src="logo.png" alt="page logo" />
                YalVic
              </h1>
            </Link>
          </span>

          <span>
            <input
              className={styles.search}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className={styles.searchbutton} type="">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </span>

          <span className={styles.addmargin}>
            <Link to='/add'>
            <i
              class="fa-solid fa-circle-plus"
              style={{ color: "rgb(255, 6, 151)", fontSize: "270%" }}
            ></i>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
