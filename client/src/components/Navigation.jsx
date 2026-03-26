import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm py-3">
      <div className="container page-shell">
        <NavLink className="navbar-brand fw-bold" to="/">
          Job Hunter Tracker
        </NavLink>

        <div className="navbar-nav ms-auto gap-lg-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link fw-bold text-warning" : "nav-link"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "nav-link fw-bold text-warning" : "nav-link"
            }
          >
            Search
          </NavLink>

          <NavLink
            to="/saved"
            className={({ isActive }) =>
              isActive ? "nav-link fw-bold text-warning" : "nav-link"
            }
          >
            Saved Jobs
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "nav-link fw-bold text-warning" : "nav-link"
            }
          >
            Settings
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
