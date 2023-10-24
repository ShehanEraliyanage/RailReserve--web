import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

import { getTraveller } from "../Controllers/traveller";

const TravellerManagement = () => {
  const [travellers, setTravellers] = useState([]);

  useEffect(() => {
    getTraveller().then((result) => {
      const { data } = result;
      setTravellers(data);
    });
  }, []);
  const handleActive = (trainId) => {
    // Logic to activate the traveller with the given ID
    // You can implement this logic here
    Swal.fire("Active", "The traveller has been activated.", "success");
  };

  const handleReactive = (trainId) => {
    // Logic to reactivate the traveller with the given ID
    // You can implement this logic here
    Swal.fire("Reactive", "The traveller has been reactivated.", "success");
  };

  return (
    <div className="wrapper">
      <div className="main">
        <main className="content">
          <div className="container-fluid">
            <div className="header">
              <h1 className="header-title">Travellers Management</h1>
            </div>

            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <table id="example" className="table table-striped my">
                    <thead>
                      <tr>
                        <th>NIC</th>
                        <th>Full Name</th>
                        <th>Status</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {travellers.map((travel, index) => (
                        <tr key={index}>
                          <td>{travel.nic}</td>
                          <td>{travel.fullName}</td>
                          <td>{travel.userName}</td>
                          <td>{travel.email}</td>
                          <td>{travel.phoneNumber}</td>
                          <td>{travel.status}</td>
                          <td className="table-action">
                            <div
                              className="mx-auto"
                              style={{
                                display: "flex",
                                gap: "1px",
                                paddingRight: "100px",
                              }}
                            >
                              <button
                                className="btn btn-pill btn-success btn-sm"
                                onClick={() => handleActive(travel.nic)}
                              >
                                Active
                              </button>
                              <button
                                className="btn btn-pill btn-danger btn-sm"
                                onClick={() => handleReactive(travel.nic)}
                              >
                                Reactive
                              </button>
                            </div>
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
    </div>
  );
};

export default TravellerManagement;
