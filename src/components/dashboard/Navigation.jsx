import { useState } from "react";

import "../../asset/css/dashboard.css";
import Profiledialouge from "../profile/Profiiledialougue";

function Navigation(props) {
    const[showProfile,setShowProfile] = useState(false);
    function showProfileFun(){
        setShowProfile(!showProfile)
    }
    return ( 
        <>
        <div className="navbar  nav-main-settings d-flex flex-column">
        <div className="nav-bar-settings d-flex align-items-center justify-content-between">
            <div className="d-flex nav-item">
          <img
          className="sidebar-icon"
          onClick={props.showHideSidebar}
          src={require("../../asset/images/Sidebar.png")}
          alt="abc"
        ></img>
        <div className="dashboard-heading d-flex">
          <img
            className="logo-settings"
            src={require("../../asset/images/logo.jpg")}
            alt="logo"
          ></img>
          <span>
            <h5>Interview Task</h5>
          </span>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-end">
        <button className="btn nav-btn">Username</button>
            <img onClick={()=>showProfileFun()} className="user-img" src={require('../../asset/images/user-profile.png')} alt="user"></img>
        </div> 
        </div>
      </div>
      {showProfile? <Profiledialouge></Profiledialouge>:""}
      </>
     );
}

export default Navigation;