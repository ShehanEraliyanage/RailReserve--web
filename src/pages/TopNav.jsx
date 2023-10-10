import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand">Travel App</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Actions
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
                <Link className="dropdown-item" to="/logout">
                  Logout
                </Link>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
