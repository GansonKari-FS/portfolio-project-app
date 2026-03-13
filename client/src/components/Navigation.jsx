import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="logo-area">
        <h1>CareerPathTracker</h1>
        <p>Track your job search in one place</p>
      </div>

      <div className="nav-links">
        <NavLink to="/" end>
          Dashboard
        </NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/details">Details</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
