import React from "react";
import Image from "@atlaskit/image";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../button";
import { IMG_LogoColor } from "../../assets";
import "./index.css";

const ImageStyled = styled(Image)`
  width: 90px;
  height: 90px;
`;

const Header = (props) => {
  const { isLight, log } = props;
  const att = log ? "none" : " ";
  
  return (
    <>
      {isLight ? (
        <div className="headerContainer">
          <nav className="nav">
            <ul className="navList">
              <li>
                <Link to="/">
                  <ImageStyled src={IMG_LogoColor} alt="Logo" testId="image" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Button name="Featured" att="btn-pink btn" />
                </Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <div className="headerButton">
            <div className="login">
              <button>
                <Link to="/login">LOGIN</Link>
              </button>
            </div>
            <div className="register">
              <Link to="/register">
                <Button name="REGISTER" att="btn-register btn" />
              </Link>
            </div>
            <div className="setting">
              <i className="fa-solid fa-gear"></i>
            </div>
          </div>
        </div>
      ) : (
        <div className="headerContainer" style={{ display: `${att}` }}>
          <nav className="nav navDark">
            <ul className="navList">
              <li>
                <Link to="/">
                  <ImageStyled src={IMG_LogoColor} alt="Logo" testId="image" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Button name="Featured" att="btn-pink btn" />
                </Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/detail">Detail</Link>
              </li>
              <li>
                <Link to="/error">Error</Link>
              </li>
            </ul>
          </nav>
          <div className="headerButton headerButtonDark">
            <div className="login">
              <button>
                <Link to="/login">LOGIN</Link>
              </button>
            </div>
            <div className="register">
              <Link to="/register">
                <Button name="REGISTER" att="btn-register btn" />
              </Link>
            </div>
            <div className="setting">
              <i className="fa-solid fa-gear"></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
