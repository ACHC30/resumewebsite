import { Link } from "react-router-dom";
import { Nav, NavLink, NavMenu } from "../Components/Navbar";

// this layout page would be used in multiple pages to serve as their header.
function Header() {
  return (
    <div>
      <header style={{ textAlign: "center" }}>
        <h1>Resume Website</h1>
        <h2>Christopher Chandra</h2>
        <h3>Choose The Link for different kind of details</h3>
      </header>
      <Nav>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
        </NavMenu>
        <NavMenu>
          <Link to="/Contact">Contact Details</Link>
        </NavMenu>
        <NavMenu>
          <Link to="/Summary">Summary</Link>
        </NavMenu>
        <NavMenu>
          <Link to="/Skills">Skills</Link>
        </NavMenu>
        <NavMenu>
          <Link to="/Experience">Experience</Link>
        </NavMenu>
        <NavMenu>
          <Link to="/Education">Education and Training</Link>
        </NavMenu>
        <NavMenu>
          <Link to="/ReactSkills">Skills With React</Link>
        </NavMenu>
        <NavMenu>
          <Link to="/Projects">Projects</Link>
        </NavMenu>
      </Nav>
    </div>
  );
}

export default Header;
