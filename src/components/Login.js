import React from "react";
import "./style.css";
import anim from "./Union.png";
import logo from "./logo.png";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  let navigate = useNavigate();
  let email = useRef("");
  let password = useRef("");

  let loginCall = async () => {
    let requestData = {
      email: email.current.value,
      password: password.current.value,
    };

    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/login`,

      requestData,
      { withCredentials: true }
    );

    console.log(response);

    if (response && response.data) {
      if (response.data.isAuth == true) {
        toast("Login Success !");
        navigate("/dashboard");
      } else if (response.data.error == true) {
        toast(response.data.message);
      } else toast(response.data.error.message);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    try {
      loginCall();
    } catch (e) {
      console.log(e);
      toast("Error ! Try Later");
    }
  };

  return (
    <>
      <div className="left">
        <div className="left-content">
          <p className="reset-heading">
            <b>
              Company <br />
              Manager Portal
            </b>
          </p>
          <div className="reset-content">
            <p>
              <ul>
                <li>points</li>
                <li>points</li>
                <li>points</li>
              </ul>
            </p>
          </div>
        </div>
        <div>
          <img src={anim} className="anim" alt="anim" />
        </div>
      </div>

      <div className="right">
        <div className="right-content">
          <div>
            <h2>
              <img src={logo} className="logo" alt="anim" />
              &nbsp; Cyethack Solutions
            </h2>
          </div>
          <div className="right-content-text">
            <form onSubmit={handleFormSubmit}>
              <h1 style={{ textAlign: "center" }}>
                <b>Log In</b>
              </h1>
              <label htmlFor="email">
                Email
                <br />
                <input
                  ref={email}
                  type="email"
                  className="text-area"
                  defaultValue={"akhilraj@mailnesia.com"}
                  required
                />
              </label>
              <br />
              <label htmlFor="pass">
                Password <br />
                <input
                  ref={password}
                  type="password"
                  className="text-area"
                  defaultValue={"akhilraj"}
                  required
                />
              </label>
              <br />
              <a
                href="#"
                style={{ textDecoration: "underline", color: "#000" }}
              >
                Forgot Password?
              </a>
              <br />
              <button type="submit" className="button-84">
                Done
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
