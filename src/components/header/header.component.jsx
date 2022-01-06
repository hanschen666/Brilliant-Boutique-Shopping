import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <a href="" className="logo">
          <img className="logo" src={logo}></img>
        </a>
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/" className="option">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
