import React from "react";
import "./App.css";
import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";
import HomeScreen from "./screens/home";
import DetailScreen from "./screens/detailMovie";
import ErrorScreen from "./screens/error";

import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/headerNavbar";
import Footer from "./components/footer";

const App = () => {
  const location = useLocation();
  return (
    <div className="container">
      <Header
        isLight={location.pathname === "/" ? true : false}
        log={
          location.pathname === "/login" || location.pathname === "/register"
            ? true
            : false
        }
      />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/detail" element={<DetailScreen />} />
        <Route path="/detail/:id" element={<DetailScreen />} />
        <Route path="/error" element={<ErrorScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
      <Footer
        log={
          location.pathname === "/login" || location.pathname === "/register"
            ? true
            : false
        }
      />
    </div>
  );
};

export default App;
