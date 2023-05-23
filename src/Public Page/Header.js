import { Nav, NavLink, NavMenu, NavBtn } from "../Components/Navbar";

// this layout page would be used in multiple pages to serve as their header.
function Header() {
  return (
    <div className="header">
      <Nav>
        <NavBtn>
          <h1>Resume Website</h1>
        </NavBtn>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to="/Contact">Contact Details</NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to="/Summary">Summary</NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to="/Skills">Skills</NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to="/Experience">Experience</NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to="/Education">Education and Training</NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to="/Projects">Projects</NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to="/ReactSkills">Skills With React</NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
}

export default Header;
