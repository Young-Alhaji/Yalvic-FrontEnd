import React from 'react'
import { useState } from "react";
import Navbar from '../Components/Navbar';
import styles from '../Modules/profile.module.css';
import FirstTop from '../Components/FirstTop'
import ThirdTop from '../Components/ThirdTop'
import SecondTop from '../Components/SecondTop';

const Profile = () => {
    
  return (
    <>      
     <Navbar/>
        <SecondTop/>
        <ThirdTop />
        <center>
        <div className={styles.body}>
            <p className={styles.mainp}>
                Profile Page
            </p>
            <div className={styles.cover}>
                <label  className={styles.label}>First Name:</label>
                <p className={styles.p} >{}</p>
            </div> <br />
            <div className={styles.cover}>
                <label className={styles.label}>Last Name:</label>
                <p className={styles.p} >{}</p>
            </div> <br />
            <div className={styles.cover}>
                <label className={styles.label}>Email:</label>
                <p className={styles.p} >{}</p>
            </div> <br />
            <div className={styles.cover}>
                <label className={styles.label}>Balance:</label>
                <p className={styles.p} >#{}</p>
            </div> <br />
            <div className={styles.cover}>
                <label className={styles.label}>Transfer Pin:</label>
                <p className={styles.p} >****</p>
            </div> <br />
            <div className={styles.cover}>
                <label className={styles.label}>Account No:</label>
                <p className={styles.p} >{}</p>
            </div>
            
        </div>
        </center> <br />
    </>
  )
}

export default Profile