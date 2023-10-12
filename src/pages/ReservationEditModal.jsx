import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ReservationEditModal = ({ show, handleClose }) => {
  const [editedReservation, setEditedReservation] = useState({
    id: "",
    scheduleId: "",
    travelerId: "",
    bookingDate: "",
    reservationDate: "",
    noOfTickets: "",
    paymentStatus: "",
    bookingStatus: "",
  });

  const handleEditReservation = () => {
    console.log("Edited Reservation Data:", editedReservation);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Reservation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="reservationID" className="form-label">
              Reservation ID
            </label>
            <input
              type="text"
              className="form-control"
              id="reservationID"
              value={editedReservation.id}
              onChange={(e) =>
                setEditedReservation({
                  ...editedReservation,
                  id: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="scheduleID" className="form-label">
              Schedule ID
            </label>
            <input
              type="text"
              className="form-control"
              id="scheduleID"
              value={editedReservation.scheduleId}
              onChange={(e) =>
                setEditedReservation({
                  ...editedReservation,
                  scheduleId: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="travelerID" className="form-label">
              Traveler ID
            </label>
            <input
              type="text"
              className="form-control"
              id="travelerID"
              value={editedReservation.travelerId}
              onChange={(e) =>
                setEditedReservation({
                  ...editedReservation,
                  travelerId: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bookingDate" className="form-label">
              Booking Date
            </label>
            <input
              type="date"
              className="form-control"
              id="bookingDate"
              value={editedReservation.bookingDate}
              onChange={(e) =>
                setEditedReservation({
                  ...editedReservation,
                  bookingDate: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="reservationDate" className="form-label">
              Reservation Date
            </label>
            <input
              type="date"
              className="form-control"
              id="reservationDate"
              value={editedReservation.reservationDate}
              onChange={(e) =>
                setEditedReservation({
                  ...editedReservation,
                  reservationDate: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="noOfTickets" className="form-label">
              No. of Tickets
            </label>
            <input
              type="text"
              className="form-control"
              id="noOfTickets"
              value={editedReservation.noOfTickets}
              onChange={(e) =>
                setEditedReservation({
                  ...editedReservation,
                  noOfTickets: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="paymentStatus" className="form-label">
              Payment Status
            </label>
            <input
              type="text"
              className="form-control"
              id="paymentStatus"
              value={editedReservation.paymentStatus}
              onChange={(e) =>
                setEditedReservation({
                  ...editedReservation,
                  paymentStatus: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bookingStatus" className="form-label">
              Booking Status
            </label>
            <input
              type="text"
              className="form-control"
              id="bookingStatus"
              value={editedReservation.bookingStatus}
              onChange={(e) =>
                setEditedReservation({
                  ...editedReservation,
                  bookingStatus: e.target.value,
                })
              }
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEditReservation}>
          Save Reservation
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReservationEditModal;
