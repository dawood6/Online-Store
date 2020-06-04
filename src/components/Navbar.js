import React from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "@material/react-material-icon";
import "@material/react-material-icon/dist/material-icon.css";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav id="navbar" className="">
    <div className="nav-wrapper">

      <div className="logo">
      <Link to="/" className="navbar-brand">
        <img src={logo} height="100" />
      </Link>
      </div>
  
      <ul id="menu">
        <li></li>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/cart">My cart</Link></li>
    <Link to="/cart">
            <i className="material-icons">shopping_cart</i>
          </Link>
      </ul>
    </div>
  </nav>

  );
};

export default Navbar;
