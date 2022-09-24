import React from 'react'
import { useState } from "react";
import Navbar from '../Components/Navbar';
import styles from '../Modules/home.module.css';
import { useNavigate } from "react-router"
import { Link } from 'react-router-dom';
import FirstTop from "../Components/FirstTop";
import ThirdTop from "../Components/ThirdTop";
import { useEffect } from 'react';


const Home = () => {
 let navigate= useNavigate()
 useEffect(() => {
   
 
   
 }, [])
 

  return (
    <>   
    <Navbar/>
      <FirstTop homecolor='text-white'/>
      <ThirdTop />
    </>
  )
}

export default Home