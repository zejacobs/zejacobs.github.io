import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark bg-gradient justify-content-between shadow">
      <div className="container">
        <Link className="navbar-brand" to="/Home">
          zejacobs
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item pe-2">
            <Link className="nav-link" to="/Resume">
              Resume
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/Projects">
              Projects
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/Experience">
              Experience
            </Link>
          </li>
          <li className="nav-item ps-2">
            <Link className="nav-link" to="/About">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
