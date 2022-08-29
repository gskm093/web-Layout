import { useState } from "react";
import "../../asset/css/popup.css";
function NewUser(props) {
  const [roles, setRoles] = useState(["Admin", "User"]);
  const [tempUser, setTempUser] = useState({});
  const [initialValue, setInitialValue] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });
  const [availableUser, setAvailableUser] = useState(
    props.operation === "edit" ? props.userData : initialValue
  );

  function changeValue(e) {
    const { currentTarget: input } = e;
    const name = input.name;
    const value = input.value;
    if (availableUser.name) {
      console.log("Inside edit");
      setAvailableUser({
        name: name === "name" ? value : availableUser.name,
        email: name === "email" ? value : availableUser.email,
        role: name === "role" ? value : availableUser.role,
      });
    } else {
      setInitialValue({
        name: name === "name" ? value : initialValue.name,
        email: name === "email" ? value : initialValue.email,
        role: name === "role" ? value : initialValue.role,
        password: name === "password" ? value : initialValue.password,
      });
    }
  }

  function submitTheNewUser() {
    if (availableUser.name) {
      setTempUser({ availableUser });
      const veryTemp = JSON.stringify(availableUser);
      props.updateUser(veryTemp);
      setAvailableUser({
        name: "",
        email: "",
        role: "",
        password: "",
      });
      setTempUser({
        name: "",
        email: "",
        role: "",
        password: "",
      });
    } else {
      setTempUser({ initialValue });
      const veryTemp = JSON.stringify(initialValue);
      props.submit(veryTemp);
      setAvailableUser({
        name: "",
        email: "",
        role: "",
        password: "",
      });
      setTempUser({
        name: "",
        email: "",
        role: "",
        password: "",
      });
    }

    props.closeFun();
  }

  function closePopup() {
    setAvailableUser({
      name: "",
      email: "",
      role: "",
      password: "",
    });
    setTempUser({
      name: "",
      email: "",
      role: "",
      password: "",
    });
    props.closeFun();
  }

  return (
    <div className="modal-content">
      {console.log("Avialable USer", availableUser)}
      <div className="d-flex justify-content-between align-items-center">
        <p className="add-new-user-heading">
          {props.operation === "edit" ? "Edit User" : "Add New User"}
        </p>
        <img
          className="cross-icon"
          onClick={() => closePopup()}
          src={require("../../asset/images/cross.png")}
          alt="abc"
        ></img>
      </div>
      <div class="form-group">
        <label className="label" for="user1">
          User Name
        </label>
        <input
          type="text"
          onChange={(e) => changeValue(e)}
          name="name"
          value={
            props.operation === "edit" ? availableUser.name : initialValue.name
          }
          class="form-control"
          placeholder="User Name"
        />
      </div>
      <div class="form-group">
        <label className="label" for="exampleInputEmail1">
          Email ID
        </label>
        <input
          type="email"
          name="email"
          value={
            props.operation === "edit"
              ? availableUser.email
              : initialValue.email
          }
          class="form-control"
          onChange={(e) => changeValue(e)}
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label className="label" for="exampleInputEmail1">
          Select Role
        </label>
        <div className="dropdown">
          <span
            className="toggle-icon dropdown-toggle"
            id="dropdownMenuLink"
          ></span>
          <select
            className="d-flex dropdown-btn form-control dropdown-toggle"
            onChange={(e) => changeValue(e)}
            aria-labelledby="dropdownMenuButton"
            name="role"
            id="roles"
          >
            <option value="" disabled selected={!availableUser.role}>
              None
            </option>
            {roles.map((r) => {
              return (
                <option value={r} selected={availableUser.role === r}>
                  {r}
                </option>
              );
            })}
          </select>
          {/* </div> */}
        </div>
      </div>
      {props.operation !== "edit" ? (
        <div class="form-group">
          <label className="label" for="exampleInputEmail1">
            Enter Password
          </label>
          <input
            type="password"
            class="form-control"
            onChange={(e) => changeValue(e)}
            name="password"
            value={initialValue.password}
            aria-describedby="emailHelp"
            placeholder="Set a Password"
          />
        </div>
      ) : (
        ""
      )}
      <div class="invite-btn">
        <button
          className="btn btn-primary form-control"
          onClick={() => submitTheNewUser()}
        >
          {props.operation === "edit" ? "Save" : "Invite"}
        </button>
      </div>
    </div>
  );
}

export default NewUser;
