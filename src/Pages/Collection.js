import React from 'react'
import Navbar from '../Components/Navbar'
import SecondTop from '../Components/SecondTop'
import ThirdTop from '../Components/ThirdTop'
import styles from "../Modules/collection.module.css";
const Collection = () => {
  return (
    <>
    <Navbar/>
    <SecondTop colColor='text-white'/>
    <center>
      <div className={styles.h1}>
      My Collection
      </div>
    </center>
    <ThirdTop/>
    </>
  )
}

export default Collection