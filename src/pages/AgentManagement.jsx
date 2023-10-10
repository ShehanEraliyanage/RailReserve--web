import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AgentRegistrationModal from "./AgentRegistrationModal";

export default function AgentManagement() {
  const [agentList, setAgentList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const simulatedAgentData = [
    {
      email: "hirusha@example.com",
      username: "Hirusha",
      fullName: "Hirusha Ravishan",
      role: "Backoffice",
      _id: 1,
    },
  ];

  useEffect(() => {
    setAgentList(simulatedAgentData);
  }, []);

  return (
    <div className="wrapper">
      <div className="main">
        <main className="content">
          <div className="container-fluid">
            <div className="header">
              <h1 className="header-title">Agent Management</h1>
              <Link
                className="btn btn-primary ml-auto mb-2"
                onClick={handleShowModal}
              >
                Add Agent
              </Link>
            </div>

            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <table id="example" className="table table-striped my">
                    <thead>
                      <tr>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Full Name</th>
                        <th>Role</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {agentList.map((agent, index) => (
                        <tr key={index}>
                          <td>{agent.email}</td>
                          <td>{agent.username}</td>
                          <td>{agent.fullName}</td>
                          <td>{agent.role}</td>
                          <td className="table-action">
                            <button
                              className="btn btn-pill btn-danger btn-sm"
                              style={{ marginLeft: 45, width: 60 }}
                              // Implement agent deletion logic here
                              // onClick={() => deleteMyAgent(agent._id)}
                            >
                              Delete
                            </button>
                            {/* Add an edit link if needed */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Add the AgentRegistrationModal component */}
      <AgentRegistrationModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
}
