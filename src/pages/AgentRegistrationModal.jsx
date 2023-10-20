import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";

//controllers
import { addAgent } from "../Controllers/agent";

export default function AgentRegistrationModal({ show, handleClose }) {
  const [agentData, setAgentData] = useState({
    email: "",
    username: "",
    fullName: "",
    role: "agent",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgentData({ ...agentData, [name]: value });
  };

  const handleSubmit = () => {
    const { email, username, fullName, password, confirmPassword } = agentData;
    console.log(
      "🚀 ~ file: AgentRegistrationModal.jsx:23 ~ handleSubmit ~ agentData:",
      agentData
    );
    if (
      email === "" &&
      username === "" &&
      fullName === "" &&
      password === "" &&
      confirmPassword === ""
    ) {
      Swal.fire("All field are empty..");
    } else {
      addAgent({
        email: email,
        username: username,
        fullName: fullName,
        password: password,
        confirmPassword: confirmPassword,
      }).then((result) => {
        if (result.status) {
          Swal.fire({
            title: "Success!",
            text: "New agent registered Successfully",
            icon: "success",
            timer: 2000,
            button: false,
          });
        }
      });
    }
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
