import React from "react";
import "./index.css";
import Button from "../button/index";

const data_price = [
  { id: 1, name: "BASIC", price: "Free" },
  { id: 2, name: "BEST VALUE", price: "24" },
  { id: 3, name: "PRO", price: "54" },
  { id: 4, name: "ENTERPRISE", price: "99" },
];

const ListPrice = () => {
  return (
    <div className="listPriceContainer">
      {data_price.map((item) => {
        return <PriceItem data={item} key={item.id} />;
      })}
    </div>
  );
};

const PriceItem = ({ data }) => {
  return (
    <div className="priceItem">
      <div className="price">
        <h3>{data.name}</h3>
        <p>
          <span>$</span>
          <span>{data.price}</span>
        </p>
      </div>
      <div className="listValue">
        <ul className="listValueContent">
          <li>Nam sollicituden dignissim</li>
          <li>Cras convallis lucas</li>
          <li>Quisque ut metus</li>
          <li>Vivamus sit amet</li>
          <li>Cras convallis lucas orci</li>
        </ul>
      </div>
      <p>Interdum et malesuada fames ac ante ipsum primis faucibus</p>
      <Button name="CHOOSE PLAN" att="btn btn-pink" />
    </div>
  );
};

export default ListPrice;
