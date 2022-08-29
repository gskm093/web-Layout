import { useState } from "react";
import "../asset/css/registration.css";
function Signup(props) {
  const [initialValue, setInitialValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  function changeValue(e) {
    const { currentTarget: input } = e;
    const name = input.name;
    const value = input.value;
    setInitialValue({
      name: name === "name" ? value : initialValue.name,
      email: name === "email" ? value : initialValue.email,
      password: name === "password" ? value : initialValue.password,
    });
  }

  function register() {
    const veryTemp = JSON.stringify(initialValue);
    props.registerUser(veryTemp);
  }

  return (
    <div className="signup-container">
      <div className="row login-res-setting">
        <img
          className="custom-img-settings1"
          src={require("../asset/images/Rightvector.png")}
          alt="custom img"
        ></img>
      </div>
      <div className="login-form-contanier">
        <div className="form-to-postion1">
          <div className="signup-heading d-flex">
            <img
              className="logo-settings-login"
              src={require("../asset/images/logo.jpg")}
              alt="logo"
            ></img>
            <span className="logo-heading-reason">
              <h2>Interview Task</h2>
            </span>
          </div>
          <div className="access-type-settings2 d-flex flex-column">
            <h5>Signup</h5>
            <p>Enter your details</p>
          </div>

          <div className="form-setting">
            <div className="mb-3 form-res-size">
              <label for="exampleInputEmail1" className="form-label">
                Enter your name
              </label>
              <input
                type="text"
                name="name"
                value={initialValue.name}
                onChange={(e) => changeValue(e)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 form-res-size">
              <label for="exampleInputPassword1" class="form-label">
                Enter email
              </label>
              <input
                type="text"
                name="email"
                value={initialValue.email}
                onChange={(e) => changeValue(e)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-res-size">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <div className="d-flex">
                <img
                  className="eye-icon-reg"
                  src={require("../asset/images/eye.png")}
                  alt="eye"
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
            <div className="mb-3 form-res-size">
              <button
                type="submit"
                class="btn btn-primary form-control"
                onClick={() => register()}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
