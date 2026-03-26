import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaSearch, FaBookmark, FaCog } from "react-icons/fa";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm py-3">
      <div className="container page-shell">
        <NavLink
          to="/"
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
        >
          <span style={{ fontSize: "1.6rem" }}>💼</span>
          <span>Job Hunter Tracker</span>
        </NavLink>

        <div className="navbar-nav ms-auto gap-lg-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link fw-bold text-warning" : "nav-link"
            }
          >
            <FaHome className="me-1" />
            Dashboard
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "nav-link fw-bold text-warning" : "nav-link"
            }
          >
            <FaSearch className="me-1" />
            Search
          </NavLink>

          <NavLink
            to="/saved"
            className={({ isActive }) =>
              isActive ? "nav-link fw-bold text-warning" : "nav-link"
            }
          >
            <FaBookmark className="me-1" />
            Saved Jobs
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "nav-link fw-bold text-warning" : "nav-link"
            }
          >
            <FaCog className="me-1" />
            Settings
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
