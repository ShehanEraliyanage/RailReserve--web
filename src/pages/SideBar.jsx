/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
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
        <Link to={"/"}>
          <a className="list-group-item py-3">
            {" "}
            <i className="bi bi-speedometer2 fs-5 me-3"></i>
            <span className="fs-5">Dashboard</span>
          </a>
        </Link>
        <Link to={"/"}>
          <a className="list-group-item py-3">
            {" "}
            <i className="bi bi-list-ul fs-4 me-3"></i>
            <span className="fs-5">Travel List</span>
          </a>
        </Link>
        <Link to={"/"}>
          <a className="list-group-item py-3">
            {" "}
            <i className="bi bi-bookmark fs-4 me-3"></i>
            <span className="fs-5">Booking</span>
          </a>
        </Link>
        <Link to={"/"}>
          <a className="list-group-item py-3">
            {" "}
            <i className="bi bi-train-front fs-4 me-3"></i>
            <span className="fs-5">Trains</span>
          </a>
        </Link>
        <Link to={"/agent"}>
          <a className="list-group-item py-3 navStyle">
            {" "}
            <i className="bi bi-person fs-4 me-3"></i>
            <span className="fs-5">Agents</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
