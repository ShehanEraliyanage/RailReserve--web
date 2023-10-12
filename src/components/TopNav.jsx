import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Dropdown } from "react-bootstrap";

const TopNav = () => {
  return (
    <Navbar expand="lg" bg="transparent" variant="light">
      <div className="container">
        <Navbar.Brand as={Link} to="/">
          <i className="bi bi-train text-primary fs-3 me-2"></i>
          <span className="text-primary fs-4">Railway Reservation</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="collapsibleNavId" />
        <Navbar.Collapse id="collapsibleNavId">
          <Nav className="m-auto">
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdownId">
                <i className="bi bi-person fs-4 text-primary "></i>
                <span className="text-primary fs-5">My Account</span>
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item as={Link} to="/profile">
                  <i className="bi bi-person me-2"></i> Profile
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/logout">
                  <i className="bi bi-box-arrow-right me-2"></i> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default TopNav;
