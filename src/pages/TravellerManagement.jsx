import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  getTraveller,
  activeTraveller,
  deactiveTraveller,
} from "../Controllers/traveller";

const TravellerManagement = () => {
  const [travellers, setTravellers] = useState([]);

  useEffect(() => {
    getTraveller().then((result) => {
      const { data } = result;
      setTravellers(data);
    });
  }, []);
  const handleActive = (nic) => {
    console.log(nic);
    activeTraveller(nic);
    Swal.fire("Active", "The traveller has been activated.", "success");
    setTimeout(() => {
      window.location.href = "/travel-list";
    }, 2000);
  };

  const handleReactive = (nic) => {
    console.log(nic);
    deactiveTraveller(nic);
    Swal.fire("Reactive", "The traveller has been reactivated.", "success");
    setTimeout(() => {
      window.location.href = "/travel-list";
    }, 2000);
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
                        <th>Phone Number</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Status</th>
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
                                Deactive
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
