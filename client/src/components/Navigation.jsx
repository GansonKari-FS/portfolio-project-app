import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <span className="navbar-brand fw-bold">Job Hunter Tracker</span>

        <div className="navbar-nav ms-auto">
          <NavLink className="nav-link" to="/">
            Dashboard
          </NavLink>
          <NavLink className="nav-link" to="/search">
            Search
          </NavLink>
          <NavLink className="nav-link" to="/saved">
            Saved Jobs
          </NavLink>
          <NavLink className="nav-link" to="/settings">
            Settings
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
