import React from "react";
import Button from "../button/index";
import "./index.css";

const CardCategory = (props) => {
  const { button, att, image, name, bgColor } = props;
  return (
    <>
      {att ? (
        <div className="CardCategory small">
          <div
            className="CardCategoryContent"
            style={{ backgroundColor: `${bgColor}` }}
          >
            <div className="cateImg">
              <img src={image} alt="action" />
            </div>
            <div className="cateTitle">
              <h2>{name}</h2>
              <p>2.4K Films</p>
              {button ? <Button name="EXPLORE" att="btn btn-border" /> : ""}
            </div>
          </div>
        </div>
      ) : (
        <div
          className="CardCategory"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div
            className="CardCategoryContent "
            style={{ backgroundColor: `${bgColor}` }}
          >
            <div className="cateImg">
              <img src={image} alt="action" />
            </div>
            <div className="cateTitle">
              <h2>{name}</h2>
              <p>2.4K Films</p>
              {button ? <Button name="EXPLORE" att="btn btn-border" /> : ""}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardCategory;
