import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import ReservationEditModal from "./ReservationEditModal";
import ReservationAddModal from "./ReservationAddModal";

import { getReservation, deleteReservation } from "../Controllers/reservation";

const ReservationManagement = () => {
  const [reservations, setReservations] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  const handleShowEditModal = (reservation) => {
    setSelectedReservation(reservation);
    setShowEditModal(true);
  };
  const handleShowAddModal = () => {
    setShowAddModal(true);
  };

  useEffect(() => {
    getReservation().then((result) => {
      const { data } = result;
      setReservations(data);
    });
  }, []);

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleCloseAddModal = () => setShowAddModal(false);

  const cancelReservation = (reservationId) => {
    console.log(
      "🚀 ~ file: ReservationManagement.jsx:35 ~ cancelReservation ~ reservationId:",
      reservationId
    );
    Swal.fire({
      title: "Cancel Reservation?",
      text: "Are you sure you want to cancle this Reservation?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          deleteReservation(reservationId).then((response) => {
            if (response === undefined) {
              Swal.fire({
                title: "Whohooo!!!!",
                text: "Reservation must be at least 5 days in advance from the current date.",
                icon: "Error",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK",
              });
            } else {
              const updatedreservationList = reservations.filter(
                (reservation) => reservation.id !== reservationId
              );
              setReservations(updatedreservationList);
              Swal.fire({
                icon: "success",
                title: " The reservation is cancel",
                timer: 2500,
              });
              window.location.href = "/reservation";
            }
          });
        } catch (error) {
          console.log("error");
        }

        // if (response.status === 200) {
        //   const updatedreservationList = reservations.filter(
        //     (reservation) => reservation.id !== reservationId
        //   );
        //   setReservations(updatedreservationList);
        // } else {
        //   Swal.fire("Deleted!", "The train has been deleted.", "success");
        // }
      }
    });
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
                onClick={() => handleShowAddModal()}
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
                          <td>
                            {" "}
                            {reservation.paymentStatus === "p"
                              ? "Pending"
                              : reservation.paymentStatus}
                          </td>
                          <td>
                            {" "}
                            {reservation.bookingStatus === "p"
                              ? "Pending"
                              : reservation.bookingStatus}
                          </td>
                          <td className="table-action mx-auto">
                            <button
                              className="btn btn-pill btn-primary btn-sm mx-auto"
                              onClick={() => handleShowEditModal(reservation)}
                            >
                              View
                            </button>
                            <button
                              className="btn btn-pill btn-danger btn-sm mx-auto"
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
      <ReservationAddModal
        show={showAddModal}
        handleClose={handleCloseAddModal}
      />
    </div>
  );
};

export default ReservationManagement;
