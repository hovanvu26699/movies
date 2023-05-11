import React from "react";
import Log from "../../components/log";
import "./index.css";

const RegisterScreen = () => {
  return (
    <div className="signupContainer">
      <Log
        sign={true}
        title="Register"
        caption="Nice to meet you"
        sub="Just register to join with us"
      />
    </div>
  );
};

export default RegisterScreen;
