import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navber = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav>
      <div className="navbar">
        <Link
          to="/"
          className={`nav-link ${isActive("/") ? "nav-link-active" : ""}`}
        >
My Day        </Link>
        <Link
          to="/todo"
          className={`nav-link ${isActive("/todo") ? "nav-link-active" : ""}`}
        >
          To Do
        </Link>
        <Link
          to="/done"
          className={`nav-link ${isActive("/done") ? "nav-link-active" : ""}`}
        >
          Complete
        </Link>
      </div>
    </nav>
  );
};

export default Navber;
