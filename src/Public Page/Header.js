import { NavLink as Link } from "react-router-dom";
import "../CSS/Header.css";

// this layout page would be used in multiple pages to serve as their header.
function Header() {
  return (
    <div className="header">
      <div className="nav">
        <Link className="navLogo" to="/">
          <h1>Resume Website</h1>
        </Link>
        <div className="navMenu">
          <Link className="link" to="/">
            Home
          </Link>
        </div>
        <div className="navMenu">
          <Link className="link" to="/Contact">
            Contact Details
          </Link>
        </div>
        <div className="navMenu">
          <Link className="link" to="/Summary">
            Summary
          </Link>
        </div>
        <div className="navMenu">
          <Link className="link" to="/Skills">
            Skills
          </Link>
        </div>
        <div className="navMenu">
          <Link className="link" to="/Experience">
            Experience
          </Link>
        </div>
        <div className="navMenu">
          <Link className="link" to="/Education">
            Education and Training
          </Link>
        </div>
        <div className="navMenu">
          <Link className="link" to="/Projects">
            Projects
          </Link>
        </div>
        {/* <NavMenu>
          <Link to="/ReactSkills">Skills With React</Link>
        </NavMenu> */}
      </div>
    </div>
  );
}

export default Header;
