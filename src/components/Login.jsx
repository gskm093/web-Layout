import { useState } from "react";
import "../asset/css/login.css";
import Dashboard from "./Dashboard";
import Registration from "./Registration";
function Login() {
  let [data, setData] = useState([{ name: "surya", password: "king" }]);
  const [initialValue, setInitialValue] = useState({
    name: "",
    password: "",
  });
  const [loginStatus, setLoginStatus] = useState("login");

  function login() {
    let findUser = data.find((u) => u.name === initialValue.name);
    console.log("FIND USER", findUser);
    if (!findUser) {
      setLoginStatus("register");
    } else {
      setLoginStatus("dashboard");
    }
  }

  function changeValue(e) {
    const { currentTarget: input } = e;
    const name = input.name;
    const value = input.value;
    setInitialValue({
      name: name === "name" ? value : initialValue.name,
      password: name === "password" ? value : initialValue.password,
    });
  }

  function registerUser(newObj) {
    const person = JSON.parse(newObj);
    data.push(person);
    setData((arr) => [...arr]);
    console.log("login-success", data);
    setLoginStatus("login");
  }

  return loginStatus === "login" ? (
    <div className="row login-res-setting">
      {console.log("Login Status", loginStatus)}
      <div className="">
        <img
          className="custom-img-settings1 "
          src={require("../asset/images/Rightvector.png")}
          alt="custom img"
        ></img>
      </div>
      <div className="login-form-contanier ">
        <div className="form-to-postion1">
          <div className="login-heading d-flex">
            <img
              className="logo-settings-login"
              src={require("../asset/images/logo.jpg")}
              alt="logo"
            ></img>
            <span className="logo-heading-reason">
              <h2>Interview Task</h2>
            </span>
          </div>
          <div className="access-type-settings d-flex flex-column">
            <h5>Login</h5>
            <p>Sign in to your account</p>
          </div>

          <div className="form-setting">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email ID
              </label>
              <input
                type="email"
                name="name"
                value={initialValue.name}
                onChange={(e) => changeValue(e)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <div className="d-flex">
                <img
                  className="eye-icon"
                  src={require("../asset/images/eye.png")}
                  alt="eyeicon"
                ></img>
                <input
                  type="password"
                  name="password"
                  value={initialValue.password}
                  onChange={(e) => changeValue(e)}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
            <div className="mb-3">
              <button
                type="submit"
                class="btn btn-primary form-control"
                onClick={() => login()}
              >
                Sign In
              </button>
            </div>
            <div className="mb-3 text-end">
              <p>Forgot Password?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : loginStatus === "register" ? (
    <Registration registerUser={registerUser}></Registration>
  ) : loginStatus === "dashboard" ? (
    <Dashboard></Dashboard>
  ) : (
    ""
  );
}

export default Login;
