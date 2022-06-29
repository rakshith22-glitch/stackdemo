import React from "react";
import ReactLogo  from "./stackline_logo.png"
import "./nav.css"
function NavBar() {
  return (
    <header className="nav">
      <nav className="nav__container" style={{ textAlign: "center" }}>
        
      <img src={ReactLogo} style={{width:"100px"}}/>
      </nav>
    </header>
  );
}

export default NavBar;