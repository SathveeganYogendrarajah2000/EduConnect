import React from "react";
// import { Button } from "./Button";
// import { Input } from "./Input";
import "../Styles/Login.css";

import { Component } from "react";

export class Login extends Component {
  render() {
    return (
      <div>
        <div className="log-in">
          <div className="div">
            <div className="overlap">
              <div className="form">
                <div className="text-wrapper">Forgot password?</div>
                <img className="group" alt="Group" src="group.png" />

                <div className="overlap-group">
                  <img className="img" alt="User" src="image.svg" />
                  <div className="username-wrapper">
                    <div className="username-2">PASSWORD</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-2">
              <img className="group-2" alt="Group" src="image.png" />
              <p className="educonnect-let-s">
                <span className="span">
                  &nbsp;&nbsp;&nbsp;&nbsp; EduConnect !<br />
                </span>
                <span className="text-wrapper-2">
                  <br />
                </span>
                <span className="text-wrapper-3">
                  Let’s Begin to Race...
                  <br />
                </span>
              </p>
            </div>
            <div className="text-wrapper-4">Or sign in with</div>
            <div className="text-wrapper-5">First Time ?</div>
            <div className="text-wrapper-6">First Time ?</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
