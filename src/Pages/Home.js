import React from 'react'
import { useState } from "react";
import Navbar from '../Components/Navbar';
import styles from '../Modules/home.module.css';
import { useNavigate } from "react-router"
import { Link } from 'react-router-dom';
import FirstTop from "../Components/FirstTop";
import ThirdTop from "../Components/ThirdTop";
import { useEffect } from 'react';
import axios from 'axios';


const Home = () => {
  const [message, setmessage] = useState("");
  const [loading, setloading] = useState(false);
  const [eachDesign, seteachDesign] = useState([])
  const [addedIndex, setaddedIndex] = useState([])
  let endpoint= 'https://yalbble-app.herokuapp.com/fileuload/home'
  let endpoint2 = ''
 let navigate= useNavigate()
 useEffect(() => {
  setmessage('')
    setloading(true);
axios.get(endpoint).then((res)=>{
  setloading(false)
  seteachDesign(res.data.result)
  console.log(res.data.result)
})
   
 }, [])
 
 const add =(index)=>{
  let filteredArray=eachDesign.filter((item,ind)=>index ==ind)
  setaddedIndex(filteredArray)
  axios.post(endpoint2,addedIndex).then((res)=>{
    setmessage(res.data.message)
    setTimeout(function () {
      setmessage('')
      }, 2000)
  })
 }

  return (
    <>  
    {message !== "" ? (
              <div className={styles.modaltext}>{message}</div>
            ) : (
              ""
            )} 
    <Navbar/>
      <FirstTop homecolor='text-white'/>
      <div className={styles.heading}>
      U.I Designs
      </div>
      <ThirdTop />
      <div className={styles.mapdisplay}>
      {loading?<div class="d-flex justify-content-center">
  <div class="spinner-border text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>: eachDesign.map((item,index)=>(
            
          <div key={item._id} className={styles.card}>
            <div><img className={styles.img} src={item.file} alt="" /> </div>
            <div>{item.category}</div>
            <div className={styles.pinkcolor}>{item.tag}</div>
            <div>
              <button className={styles.detailsbutton}>Details</button> <br />
              <button className={styles.addbutton} onClick={()=>add(index)}>Add to Viewlist</button>
            </div>
            </div>
        )).reverse()}
      </div>
      
    </>
  )
}

export default Home