import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReservationEditModal from "./ReservationEditModal";

const ReservationManagement = () => {
  const [reservations, setReservations] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  const handleShowEditModal = (reservation) => {
    setSelectedReservation(reservation);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => setShowEditModal(false);

  const simulatedReservationData = [
    {
      id: "RR001",
      scheduleId: "SS001",
      travelerId: "TT001",
      bookingDate: "2023-10-10",
      reservationDate: "2023-10-20",
      noOfTickets: "2",
      paymentStatus: "pending",
      bookingStatus: "pending",
    },
  ];

  useEffect(() => {
    setReservations(simulatedReservationData);
  }, []);

  const cancelReservation = (reservationId) => {
    console.log(`Cancel reservation with ID: ${reservationId}`);
  };

  return (
    <div className="wrapper">
      <div className="main">
        <main className="content">
          <div className="container-fluid">
            <div className="header">
              <h1 className="header-title">Reservation Management</h1>
              <Link
                className="btn btn-primary ml-auto mb-2"
                onClick={() => handleShowEditModal(null)}
              >
                Add Reservation
              </Link>
            </div>

            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <table id="example" className="table table-striped my">
                    <thead>
                      <tr>
                        <th>Reservation ID</th>
                        <th>Schedule ID</th>
                        <th>Traveler ID</th>
                        <th>Booking Date</th>
                        <th>Reservation Date</th>
                        <th>No. of Tickets</th>
                        <th>Payment Status</th>
                        <th>Booking Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reservations.map((reservation, index) => (
                        <tr key={index}>
                          <td>{reservation.id}</td>
                          <td>{reservation.scheduleId}</td>
                          <td>{reservation.travelerId}</td>
                          <td>{reservation.bookingDate}</td>
                          <td>{reservation.reservationDate}</td>
                          <td>{reservation.noOfTickets}</td>
                          <td>{reservation.paymentStatus}</td>
                          <td>{reservation.bookingStatus}</td>
                          <td className="table-action">
                            <button
                              className="btn btn-pill btn-primary btn-sm"
                              onClick={() => handleShowEditModal(reservation)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-pill btn-danger btn-sm"
                              onClick={() => cancelReservation(reservation.id)}
                            >
                              Cancel
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

      <ReservationEditModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        reservation={selectedReservation}
      />
    </div>
  );
};

export default ReservationManagement;
