import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ScheduleAddModal from "./ScheduleAddModal";

const ScheduleManagement = () => {
  const [schedule, setSchedule] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const simulatedScheduleData = [
      {
        id: "SS001",
        trainId: "TT100",
        startingTime: "02.30.AM",
        arrivalTime: "05.30.AM",
        startingPlace: "Colombo",
        destination: "Badull",
        stopPlaceAndTime: [
          {
            place: "Rabukkana",
            time: "03.00.AM",
          },
          {
            place: "Nuwara",
            time: "04.00.AM",
          },
        ],
        price: "1000.00",
      },
    ];
    setSchedule(simulatedScheduleData);
  }, []);

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
                              // Implement schedule deletion logic here
                              // onClick={() => deleteSchedule(sched.id)}
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
