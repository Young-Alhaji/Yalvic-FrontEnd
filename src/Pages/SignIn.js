import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from '../Modules/signin.module.css';
import { useNavigate } from "react-router"
import axios from 'axios';
// import { useSelector,useDispatch } from 'react-redux';
import {setuserId} from '../redux/user';
const SignIn = ({allUsers}) => {  
  let navigate= useNavigate()
  // let dispatch=useDispatch()
  let endpoint='https://yalbble-app.herokuapp.com/auth/signin'
  const [loading, setloading] = useState(false)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [message, setmessage] = useState('')
  // const [token, settoken] = useState('')
  

  const signin=()=>{
    setmessage('')
    setloading(true);
    let user = {email,password}
   axios.post(endpoint,user).then((res)=>{
    setloading(false)
    console.log(res)
    setmessage(res.data.message)
    localStorage.userId= JSON.stringify(res.data.user_id)
    if(res.data.status==true){
      // settoken(res.data.token)
      // let tokenStorage = JSON.stringify(token)
      navigate('/home')
    }else{
      console.log('not successful')
    }
   })
}
  return (
    <>
        <div className={styles.body}>
            <div className={styles.form} >
             <h1 className={styles.h1}>
                <img className={styles.logo} src="logo.png" alt="page logo"/>YalVic
             </h1>
             <h3 className={styles.h3}>Sign In</h3>

            <input className={styles.input} type="text" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/> <br/>

            <input className={styles.input} type="password" placeholder="Password"  onChange={(e)=>setpassword(e.target.value)}/> <br/> 
            {loading ? (
              <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              ""
            )}
            {message !== "" ? (
              <div className={styles.requiredtext}>{message}</div>
            ) : (
              ""
            )} <br/>
            <button  className={styles.button} onClick={signin}>Sign In</button> <br/> <br/>
            <div></div>
            <div className={styles.center}> 
            <Link to='/signup' className={styles.whitecolor}>Don't have an account yet?</Link>
            </div>
            <div className={styles.social}>
            <div className={styles.go}><i className="fab fa-google"></i>  Google</div>
            <div className={styles.fb}><i className="fab fa-facebook"></i>  Facebook</div>
            </div>
            </div>
        </div>
    </>
  )
}

export default SignIn