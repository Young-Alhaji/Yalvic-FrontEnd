import React from "react";
import Navbar from "../Components/Navbar";
import FirstTop from "../Components/FirstTop";
import ThirdTop from "../Components/ThirdTop";
import styles from "../Modules/add.module.css";
import SecondTop from "../Components/SecondTop";
import { useState } from "react";
import axios from "axios";

const AddDesign = () => {
  let endpoint='https://yalbble-app.herokuapp.com/fileuload'
  let userId = JSON.parse(localStorage.userId)
  let username =JSON.parse(localStorage.username)
  let profilePicture =JSON.parse(localStorage.profilePicture)
  const [message, setmessage] = useState("");
  const [loading, setloading] = useState(false);
  const [file, setfile] = useState('')
  const [category, setcategory] = useState('')
  const [tag, settag] = useState('')
  const [description, setdescription] = useState('')
  const getFile=(e)=>{
    const myFile= (e.target.files[0])
    const reader = new FileReader()
    reader.readAsDataURL(myFile)
    reader.onload=()=>{
      setfile(reader.result)
    }
  }

  const add=()=>{
    if(!category || !tag || !description ){
      setmessage('Input all necessary fields')
    }else{
    setmessage('')
    setloading(true);
    let addedDesign={file,category,tag,description,userId,username,profilePicture}
    axios.post(endpoint,addedDesign).then((res)=>{
      console.log(res)
      setmessage(res.data.message);
      setloading(false)
    })
    setfile('')
    setcategory('')
    settag('')
    setdescription('')
  }
  }
  return (
    <>
      <div>
        <Navbar />
        <SecondTop/>
        <center>
          <div style={{ fontSize: "180%" }}>
           Add Design
            <br />
          </div>
        </center>
        <ThirdTop />
      </div> <br />
      <center>
      <div class="row">
      <div class="col-9 mx-auto shadow">
        <div className={styles.input}>
        <input type="file" name="" placeholder="Design Image" class="form-control my-4" onChange={(e)=>getFile(e)}/>
        <input type="text" name="" placeholder="Category" value={category} class="form-control my-4" onChange={(e)=>setcategory(e.target.value)}/>
        <input type="text" name="" placeholder="Design Tag/Name" value={tag} class="form-control my-4" onChange={(e)=>settag(e.target.value)}/>
        <textarea type="text" name="" placeholder="README......" value={description} class="form-control my-4" onChange={(e)=>setdescription(e.target.value)}></textarea> 
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
            )} <br />
        <button class="btn btn-primary w-75 mainbackcolor" onClick={add}>Add</button>
        </div>
        <div></div>
      </div>
    </div>
      </center>
    </>
  );
};

export default AddDesign;
