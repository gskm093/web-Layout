import { useState } from "react";
import "../asset/css/dashboard.css";
import MainContent from "./dashboard/MainContet";
import Navigation from "./dashboard/Navigation";
import Sidebar from "./dashboard/Sidebar";
import ManageUsers from "./users/ManageUsers";


function Dashboard() {
  const[sidebar,setSideBar] = useState(true);
  const [pageDataShow,setPageDataShow] = useState("dashboard");

  function showHideSidebar(){
    setSideBar(!sidebar);
  }
  function viewOption(val){
    console.log("inside ViewOption");
    setPageDataShow(val)
  }
  return (
    <div className="d-flex flex-column main-layout">
       <Navigation showHideSidebar={showHideSidebar}></Navigation>
       {console.log("pageDataShow",pageDataShow)}
       <div className="nav-main-settings d-flex flex-row">
        {sidebar===true? <Sidebar pageDataShow={viewOption} currentVal={pageDataShow}></Sidebar>:""}
       {
        pageDataShow ==="dashboard"? <MainContent graph={sidebar}></MainContent> : <ManageUsers ></ManageUsers>
       }
       
      

       </div>
    </div>
  );
}

export default Dashboard;
