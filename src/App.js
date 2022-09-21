import { buildQueries } from "@testing-library/react";
import { useState ,useEffect} from "react";
import { Routes,Route } from "react-router";
import { Navigate } from "react-router";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import AddDesign from "./Pages/AddDesign";
import Collection from "./Pages/Collection";
import Dashboard from "./Pages/Dashboard";
import Viewlist from "./Pages/Viewlist";
function App() {
  return (
    
    <>
      <Routes>
        <Route path="/" element={<SignUp />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/signup" element={<Navigate to='/'/>}/>
        <Route path="/add" element= {<AddDesign/>}/>
        <Route path="/collection" element= {<Collection/>}/>
        <Route path="/dashboard" element= {<Dashboard/>}/>
        <Route path="/viewlist" element= {<Viewlist/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
