import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/sideBar.css";

function SideBar() {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <i className="bi bi-bootstrap-fill me-2 fs-4"></i>
        <span className="brand-name fs-4">Railway Reservation</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <Link to={"/"} className="list-group-item py-3 no-underline">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <span className="fs-5">Dashboard</span>
        </Link>
        <Link to={"/"} className="list-group-item py-3 no-underline">
          <i className="bi bi-list-ul fs-4 me-3"></i>
          <span className="fs-5">Travel List</span>
        </Link>
        <Link to={"/"} className="list-group-item py-3 no-underline">
          <i className="bi bi-bookmark fs-4 me-3"></i>
          <span className="fs-5">Booking</span>
        </Link>
        <Link to={"/"} className="list-group-item py-3 no-underline">
          <i className="bi bi-train-front fs-4 me-3"></i>
          <span className="fs-5">Trains</span>
        </Link>
        <Link to={"/agent"} className="list-group-item py-3 no-underline">
          <i className="bi bi-person fs-4 me-3"></i>
          <span className="fs-5">Agents</span>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
