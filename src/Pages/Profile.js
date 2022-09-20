import React from 'react'
import { useState } from "react";
import Navbar from '../Components/Navbar';
import styles from '../Modules/profile.module.css';

const Profile = () => {
    let allUsers=JSON.parse(localStorage.allOfUsers)
 let i=JSON.parse(localStorage.indexes)
  return (
    <>      
     <Navbar/>
        <center>
        <div className={styles.body}>
            <p className={styles.mainp}>
                Profile Page
            </p>
            <div className={styles.cover}>
                <label  className={styles.label}>First Name:</label>
                <p className={styles.p} >{allUsers[i].firstname}</p>
            </div> <br />
            <div className={styles.cover}>
                <label className={styles.label}>Last Name:</label>
                <p className={styles.p} >{allUsers[i].lastname}</p>
            </div> <br />
            <div className={styles.cover}>
                <label className={styles.label}>Email:</label>
                <p className={styles.p} >{allUsers[i].email}</p>
            </div> <br />
            <div className={styles.cover}>
                <label className={styles.label}>Balance:</label>
                <p className={styles.p} >#{allUsers[i].balance}</p>
            </div> <br />
            <div className={styles.cover}>
                <label className={styles.label}>Transfer Pin:</label>
                <p className={styles.p} >****</p>
            </div> <br />
            <div className={styles.cover}>
                <label className={styles.label}>Account No:</label>
                <p className={styles.p} >{allUsers[i].AN}</p>
            </div>
            
        </div>
        </center> <br />
    </>
  )
}

export default Profile