import React, { Component } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "@material/react-material-icon";
import "@material/react-material-icon/dist/material-icon.css";
import "./Navbar.css";
import logo from "./logo.png";
import Counter from './counter'

class Navbar extends Component {

  render() {
    return (
      <div>
        <header className="header">
          <Link to="/">
            <img
              id="logo-main"
              src={logo}
              width="100"
              alt="Logo Thing main logo"
            />
          </Link>
          <ul class="main-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">My cart</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="material-icons">shopping_cart</i>
              </Link>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Navbar;
