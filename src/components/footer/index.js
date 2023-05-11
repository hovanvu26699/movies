import React from "react";
import { IMG_LogoColor } from "../../assets";
import "./index.css";

const data_footer = [
  {
    name: "COMPANY",
    data: [
      "Donec dignissim",
      "Curabitur egestas",
      "Nam posuere",
      "Aenean facilisis",
    ],
  },
  {
    name: "SERVICES",
    data: [
      "Donec dignissim",
      "Curabitur egestas",
      "Nam posuere",
      "Aenean facilisis",
    ],
  },
  {
    name: "LEGAL",
    data: [
      "Donec dignissim",
      "Curabitur egestas",
      "Nam posuere",
      "Aenean facilisis",
    ],
  },
];

const Footer = (props) => {
  const { log } = props;
  const att = log ? "none" : " ";
  return (
    <div className="footer" style={{ display: `${att}` }}>
      <div className="footerWrapper">
        <div className="footerLogo">
          <img src={IMG_LogoColor} alt="logo" />
        </div>
        {data_footer.map((item) => {
          return <AColumn data={item} />;
        })}
        <div className="social">
          <div className="socialNetwork">
            <span>
              <i class="fa-brands fa-facebook-f"></i>
            </span>
            <span>
              <i class="fa-brands fa-instagram"></i>
            </span>
            <span>
              <i class="fa-brands fa-twitter"></i>
            </span>
            <span>
              <i class="fa-brands fa-tiktok"></i>
            </span>
          </div>
          <div className="language">
            <i class="fa-solid fa-earth-americas"></i>
            <select>
              <option className="eng" selected>
                English - En
              </option>
              <option className="vie">Vietnamese - Vie</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

const AColumn = (props) => {
  const name = props.data.name;
  const data = props.data.data;
  return (
    <div className="column">
      <h3>{name}</h3>
      <ul>
        {data.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
