import React from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "@material/react-material-icon";
import "@material/react-material-icon/dist/material-icon.css";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="navbar-brand">
        <img src={logo} height="100" />
      </Link>
      <ul className="navbar">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart">My cart</Link>
        </li>
        <li >
          <Link to="/cart">
            <i className="material-icons">shopping_cart</i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
