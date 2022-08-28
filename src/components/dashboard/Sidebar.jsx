
import "../../asset/css/dashboard.css";

function Sidebar(props) {

  return (
      <div className="box-shadow-setting">
        <div className="btn-section d-flex flex-column">
          <div className={props.currentVal === "dashboard"?"dashbord-btn d-flex justify-content-around" : "user-access-btn d-flex justify-content-around"} onClick={()=>props.pageDataShow("dashboard")}>
            {
              props.currentVal === "dashboard"? <img
              className="mangeproj-icon"
              src={require("../../asset/images/manageproj.png")}
              alt="svg"
            ></img> : <img
            className="mangeproj-icon"
            src={require("../../asset/images/proj-black.png")}
            alt="svg"
          ></img>
            }
            
            <span>Dashboard</span>
          </div>
           
            <div
              className={props.currentVal==="userAccess"?"dashbord-btn d-flex justify-content-around":"user-access-btn d-flex justify-content-around"}
              onClick={()=>props.pageDataShow("userAccess")}
            >
              {
                props.currentVal !=="userAccess"?  <img
                className="userproj-icon"
                src={require("../../asset/images/iconuser.png")}
                alt="svg"
              ></img> :  <img
              className="userproj-icon"
              src={require("../../asset/images/user-white.png")}
              alt="svg"
            ></img>
              }
              <span>User Access</span>
            </div>
        </div>
        <div className="sidebar d-flex align-items-end justify-content-center">
          <span>Copyright (c) 2021. Omnibot</span>
        </div>
      </div>
  );
}

export default Sidebar;
