import React from "react";
import FirstTop from "../Components/FirstTop";
import Navbar from "../Components/Navbar";
import SecondTop from "../Components/SecondTop";
import ThirdTop from "../Components/ThirdTop";

const Dashboard = () => {
  return (
    <>
      <div>
        <Navbar />
        <SecondTop/>
        <ThirdTop />
      </div>
    </>
  );
};

export default Dashboard;
