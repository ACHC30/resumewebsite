import { Link } from "react-router-dom";

// this layout page would be used in multiple pages to serve as their header.
function Layout() {
  return (
    <div>
      <header style={{ textAlign: "center" }}>
        <h1>Resume Website</h1>
        <h2>Christopher Chandra</h2>
        <h3>Choose The Link for different kind of details</h3>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Details</Link>
          </li>
          <li>
            <Link to="/Summary">Summary</Link>
          </li>
          <li>
            <Link to="/Skills">Skills</Link>
          </li>
          <li>
            <Link to="/Experience">Experience</Link>
          </li>
          <li>
            <Link to="/Education">Education and Training</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Layout;
