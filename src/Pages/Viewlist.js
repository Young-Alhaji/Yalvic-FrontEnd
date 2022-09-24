import React from "react";
import FirstTop from "../Components/FirstTop";
import Navbar from "../Components/Navbar";
import ThirdTop from "../Components/ThirdTop";
import styles from '../Modules/viewlist.module.css';
const Viewlist = () => {
  return (
    <>
      <Navbar />
      <FirstTop viewcolor="text-white" />
      <ThirdTop />
    </>
  );
};

export default Viewlist;
