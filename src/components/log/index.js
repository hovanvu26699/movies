import React from "react";
import Button from "../button/index";
import { Link } from "react-router-dom";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";
import { IMG_Bg_Color, IMG_Bg_Color_Right, IMG_LogoColor } from "../../assets";
import "./index.css";
const Log = (props) => {
  const { sign, title, caption, sub } = props;
  return (
    <div className="logContainer">
      <div className="logBg">
        <div className="bg-left">
          <img src={IMG_Bg_Color} alt="bg" />
        </div>
        <div className="bg-right">
          <img src={IMG_Bg_Color_Right} alt="bg" />
        </div>
      </div>
      <div className="logWrapper">
        <div className="icHome">
          <Link to="/">
            <i class="fa-solid fa-house"></i>
          </Link>
        </div>
        <div className="colLog">
          <div className="Logcaption">
            <div className="box_logo">
              <img src={IMG_LogoColor} alt="logo" />
              <h3>Software</h3>
            </div>
            <div className="logTitle">
              <h2>{caption ? caption : "Welcome back"}</h2>
              <p>{sub ? sub : "Please login to continue"}</p>
            </div>
          </div>
          <div className="formLog">
            <div>
              <h2>{title ? title : "Login"}</h2>
              <Link>
                <i class="fa-solid fa-arrow-right"></i> Create new account
              </Link>
            </div>
            <div className="logBtn">
              <Button
                name="FACEBOOK"
                icon={<i class="fa-brands fa-facebook-f"></i>}
                att="btn btn-blue"
              />
              <Button
                name="TWITTER"
                icon={<i class="fa-brands fa-twitter"></i>}
                att="btn btn-blue"
              />
              <Button
                name="GOOGLE"
                icon={<i class="fa-brands fa-google"></i>}
                att="btn btn-blue"
              />
            </div>
            <p>
              <span>--- </span>Or register with email<span> ---</span>
            </p>
            {sign ? (
              <div className="formSignup">
                <form className="formRegister form">
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    type="email"
                    label="Email"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    type="password"
                    label="Password*"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    type="password"
                    label="Repeat Password*"
                    variant="outlined"
                  />
                  <div className="terms">
                    <div>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="I have read and accept the Terms of"
                      />
                      <p>
                        <Link to="">Service & Privacy Policy *</Link>
                      </p>
                    </div>
                    <Button name="CONTINUE" att="btn btn-blue" />
                  </div>
                </form>
              </div>
            ) : (
              <div className="formLogin">
                <form className="form">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    type="password"
                    label="Password"
                    variant="outlined"
                  />
                  <div className="remember">
                    <div>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Remember"
                      />
                    </div>
                    <div>
                      <Link to="">Forgot password?</Link>
                    </div>
                  </div>
                  <Button name="CONTINUE" att="btn btn-blue" />
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Log;
