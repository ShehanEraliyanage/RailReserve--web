import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ReservationViewModal = ({ show, handleClose, reservation }) => {
  const [editedReservation, setEditedReservation] = useState({});
  useEffect(() => {
    if (reservation) {
      setEditedReservation({
        id: reservation.id,
        scheduleId: reservation.scheduleId,
        travelerId: reservation.travelerId,
        bookingDate: reservation.bookingDate,
        reservationDate: reservation.reservationDate,
        noOfTickets: reservation.noOfTickets,
        paymentStatus: reservation.paymentStatus,
        bookingStatus: reservation.bookingStatus,
      });
    }
  }, [reservation]);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View Reservation</Modal.Title>
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
                readOnly
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
                readOnly
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
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="travelerID" className="form-label">
                Booking Date
              </label>
              <input
                type="text"
                className="form-control"
                id="bookingDate"
                value={editedReservation.bookingDate}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="travelerID" className="form-label">
                Reservation Date
              </label>
              <input
                type="text"
                className="form-control"
                id="reservationDate"
                value={editedReservation.reservationDate}
                readOnly
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
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="travelerID" className="form-label">
                No. of Tickets
              </label>
              <input
                type="text"
                className="form-control"
                id="noOfTickets"
                value={editedReservation.noOfTickets}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="travelerID" className="form-label">
                Payment Status
              </label>
              <input
                type="text"
                className="form-control"
                id="paymentStatus"
                value={editedReservation.paymentStatus}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="travelerID" className="form-label">
                Booking Status
              </label>
              <input
                type="text"
                className="form-control"
                id="bookingStatus"
                value={editedReservation.bookingStatus}
                readOnly
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReservationViewModal;
