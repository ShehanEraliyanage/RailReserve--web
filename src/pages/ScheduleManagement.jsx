import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import ScheduleAddModal from "./ScheduleAddModal";

import { getSchedule, deleteSchedules } from "../Controllers/schedule";

const ScheduleManagement = () => {
  const [schedule, setSchedule] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    getSchedule().then((result) => {
      const { data } = result;
      setSchedule(data);
    });
  }, []);

  const deleteSchedule = (scheduleID) => {
    Swal.fire({
      title: "Delete Train?",
      text: "Are you sure you want to delete this train?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSchedules(scheduleID)
          .then((response) => {
            if (response.status === 200) {
              const updatedTrainList = schedule.filter(
                (schedule) => schedule.id !== scheduleID
              );
              setSchedule(updatedTrainList);
            } else {
              Swal.fire("Deleted!", "The train has been deleted.", "success");
              setTimeout(() => {
                window.location.href = "/schedule";
              }, 1500);
            }
          })
          .catch((error) => {
            Swal.fire("Error", "Failed to delete the train.", error);
          });
      }
    });
  };

  return (
    <div className="wrapper">
      <div className="main">
        <main className="content">
          <div className="container-fluid">
            <div className="header">
              <h1 className="header-title">Schedule Management</h1>
              <Link
                className="btn btn-primary ml-auto mb-2"
                onClick={handleShowModal}
              >
                Add Schedule
              </Link>
            </div>

            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <table id="example" className="table table-striped my">
                    <thead>
                      <tr>
                        <th>Schedule ID</th>
                        <th>Train ID</th>
                        <th>Starting Time</th>
                        <th>Arrival Time</th>
                        <th>Starting Place</th>
                        <th>Destination</th>
                        <th>Stop Place & Time</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedule.map((sched, index) => (
                        <tr key={index}>
                          <td>{sched.id}</td>
                          <td>{sched.trainId}</td>
                          <td>{sched.startingTime}</td>
                          <td>{sched.arrivalTime}</td>
                          <td>{sched.startingPlace}</td>
                          <td>{sched.destination}</td>
                          <td>
                            {sched.stopPlaceAndTime.map((stop, stopIndex) => (
                              <p key={stopIndex}>
                                {stop.place} - {stop.time}
                              </p>
                            ))}
                          </td>
                          <td>{sched.price}</td>
                          <td className="table-action">
                            <button
                              className="btn btn-pill btn-danger btn-sm mx-auto"
                              onClick={() => deleteSchedule(sched.id)}
                            >
                              Delete
                            </button>
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

      <ScheduleAddModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default ScheduleManagement;
