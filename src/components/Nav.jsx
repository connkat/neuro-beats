import { useState, useEffect } from "react";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <div className="nav-logo">
        <a href="/">
          <img src="./images/logo-image.png" alt="logo" className="logo" />
        </a>
      </div>
      <div className="title">
        <h1>NEURO-BEATS</h1>
        <h3>CREATE MUSIC WITH YOUR BRAIN</h3>
      </div>
      <div className="contact">
        <a href="mailto:hi.connkat@gmail.com" target="_blank" rel="noreferrer">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Nav;
