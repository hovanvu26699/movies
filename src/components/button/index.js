import React from "react";
import "./index.css";

const Button = (props) => {
  const { name, icon, att } = props;
  return (
    <div className="button">
      <button className={att}>
        {icon} {name}
      </button>
    </div>
  );
};

export default Button;
