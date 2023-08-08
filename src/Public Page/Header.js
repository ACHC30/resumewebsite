import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../CSS/Header.css";

// this layout page would be used in multiple pages to serve as their header.
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      <div className="nav">
        <Link className="navLogo" to="/">
          <h1>Resume Website</h1>
        </Link>

        {/* Hamburger menu */}
        <div className="hamburger" onClick={handleMenuToggle}>
          <FaBars />
        </div>

        {/* Menu items */}
        <div className={`navMenu ${showMenu ? "active" : ""}`}>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/Contact">
            Contact Details
          </Link>
          <Link className="link" to="/Skills">
            Skills
          </Link>
          <Link className="link" to="/Experience">
            Experience
          </Link>
          <Link className="link" to="/Education">
            Education and Training
          </Link>
          <Link className="link" to="/Projects">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
