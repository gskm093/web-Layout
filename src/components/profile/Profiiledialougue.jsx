import { useState } from "react";
import "../../asset/css/profile.css";
function Profiledialouge() {
  let [user, setUser] = useState({
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
  });
  return (
    <div className="profile-container">
      <div className="profile-effect">
        <img
          className="background-img-setting"
          src={require("../../asset/images/profile-back.png")}
          alt="abc"
          
        ></img>
      </div>
      <div className="profile-picture">
        <img
          className="pen-icon"
          src={require("../../asset/images/pen.png")}
          alt="abc"
        ></img>
        <img
          className="circle-icon"
          src={require("../../asset/images/circle.png")}
          alt="abc"
        ></img>
        <img
          className="user-profile-settings"
          src={require("../../asset/images/user-profile.png")}
          alt="abc"
        ></img>
      </div>
      <div className="profile-details">
        <p className="profile-heading">Profile</p>
        <div class="form-group">
          <label className="label" for="user1">
            User Name
          </label>
          <input
            type="text"
            value={user.name}
            id="user1"
            placeholder="User Name"
          />
        </div>
        <div class="form-group">
          <label className="label" for="exampleInputEmail1">
            Email address
          </label>
          <input
            type="email"
            id="userEmail"
            value={user.email}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="logout-icon-setting d-flex">
            <img
              className="logout-icon"
              src={require("../../asset/images/Logout.png")}
              alt="abc"
            ></img>
            <p>Logout</p>
          </div>
          <div className="arrow-icon">
            <img
              className="logout-icon"
              src={require("../../asset/images/Arrow.png")}
              alt="abc"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profiledialouge;
