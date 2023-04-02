import { Link } from "react-router-dom";
import { Nav, NavLink, NavMenu } from "../Components/Navbar";

// this layout page would be used in multiple pages to serve as their header fro the react skills.
function ReactSkills() {
  return (
    <div>
      <header style={{ textAlign: "center" }}>
        <h1>
          This page is made so you could see what kind coding skill i have
        </h1>
        <h2>Choose which one would you like to see</h2>
      </header>
      <Nav>
        <NavMenu>
          <NavLink to="/">API</NavLink>
        </NavMenu>
        <NavMenu>
          <Link to="/">Server side</Link>
        </NavMenu>
        <NavMenu>
          <Link to="/">Client Side</Link>
        </NavMenu>
        <NavMenu>
          <Link to="/">Database</Link>
        </NavMenu>
        <NavMenu>
          <Link to="/">Files</Link>
        </NavMenu>
        <NavMenu>
          <Link to="/">Date time & calendar</Link>
        </NavMenu>
        <NavMenu>
          <Link to="/">Animations</Link>
        </NavMenu>
      </Nav>
    </div>
  );
}

export default ReactSkills;
