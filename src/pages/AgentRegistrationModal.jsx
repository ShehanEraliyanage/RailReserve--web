import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function AgentRegistrationModal({ show, handleClose }) {
  const [agentData, setAgentData] = useState({
    email: "",
    username: "",
    fullName: "",
    role: "Backoffice",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgentData({ ...agentData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle agent registration here
    // You can send agentData to your API to create a new agent
    // Example API call:
    // fetch("your_api_endpoint_here", {
    //   method: "POST",
    //   body: JSON.stringify(agentData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //   // Handle the response or update the agent list
    // })
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Agent</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={agentData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={agentData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={agentData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={agentData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={agentData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
