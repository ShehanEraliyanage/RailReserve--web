import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { addReservation } from "../Controllers/reservation";
import { getSchedule } from "../Controllers/schedule";

const ReservationAddModal = ({ show, handleClose }) => {
  const [newReservation, setNewReservation] = useState({
    id: "",
    bookingDate: new Date(),
    reservationDate: null,
    noOfTickets: "",
    paymentStatus: "",
    bookingStatus: "",
  });
  const [scheduleID, setScheduleID] = useState([]);
  const [selectedScheduleId, setSelectedScheduleId] = useState("");

  useEffect(() => {
    getSchedule().then((result) => {
      const { data } = result;
      const scheduleIds = data.map((schedule) => schedule.id);
      console.log(scheduleIds);
      setScheduleID(scheduleIds);
    });
  }, []);

  const handleAddReservation = () => {
    const bookingYear = newReservation.bookingDate.getFullYear();
    const bookingMonth = newReservation.bookingDate.getMonth() + 1;
    const bookingDay = newReservation.bookingDate.getDate();

    const reservationYear = newReservation.reservationDate.getFullYear();
    const reservationMonth = newReservation.reservationDate.getMonth() + 1;
    const reservationDay = newReservation.reservationDate.getDate();

    const formattedBookingDate = `${bookingYear}-${
      bookingMonth < 10 ? "0" : ""
    }${bookingMonth}-${bookingDay < 10 ? "0" : ""}${bookingDay}`;
    const formattedReservationDate = `${reservationYear}-${
      reservationMonth < 10 ? "0" : ""
    }${reservationMonth}-${reservationDay < 10 ? "0" : ""}${reservationDay}`;

    console.log("Formatted Booking Date:", formattedBookingDate);
    console.log("ScheduleID:", selectedScheduleId);
    console.log("Formatted Reservation Date:", formattedReservationDate);

    console.log("New Reservation Data:", newReservation);
    if (
      newReservation.id === "" &&
      newReservation.bookingDate === "" &&
      newReservation.reservationDate === "" &&
      newReservation.noOfTickets === "" &&
      newReservation.paymentStatus === "" &&
      newReservation.bookingStatus === ""
    ) {
      Swal.fire("All field are empty..");
    } else if (newReservation.travelerId === "") {
      Swal.fire("Traveler ID is required.");
    } else if (newReservation.bookingDate === "") {
      Swal.fire("Booking Date is required.");
    } else if (newReservation.reservationDate === "") {
      Swal.fire("Reservation Date is required.");
    } else if (newReservation.noOfTickets === "") {
      Swal.fire("Number of Tickets is required.");
    } else if (newReservation.paymentStatus === "") {
      Swal.fire("Payment Status is required.");
    } else if (newReservation.bookingStatus === "") {
      Swal.fire("Booking Status is required.");
    } else {
      // addReservation({
      //   id: newReservation.id,
      //   scheduleId: newReservation.scheduleId,
      // });
    }
    // handleClose(id);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Reservation</Modal.Title>
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
              value={newReservation.id}
              onChange={(e) =>
                setNewReservation({
                  ...newReservation,
                  id: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="scheduleID" className="form-label">
              Schedule ID
            </label>
            <select
              className="form-select"
              id="scheduleID"
              value={selectedScheduleId}
              onChange={(e) => setSelectedScheduleId(e.target.value)}
            >
              <option value="">Select a Schedule ID</option>
              {scheduleID.map((scheduleId) => (
                <option key={scheduleId} value={scheduleId}>
                  {scheduleId}
                </option>
              ))}
            </select>
          </div>

          {/*   //TODO check <div className="mb-3">
            <label htmlFor="scheduleID" className="form-label">
              Booking Date
            </label>
            <DatePicker
              selected={newReservation.bookingDate}
              onChange={(date) =>
                setNewReservation({
                  ...newReservation,
                  bookingDate: date,
                })
              }
            />
          </div> */}
          <div className="mb-3">
            <label htmlFor="scheduleID" className="form-label">
              Reservation Date
            </label>
            <DatePicker
              selected={newReservation.reservationDate}
              onChange={(date) =>
                setNewReservation({
                  ...newReservation,
                  reservationDate: date,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="scheduleID" className="form-label">
              No. of Tickets
            </label>
            <input
              type="text"
              className="form-control"
              id="noOfTickets"
              value={newReservation.noOfTickets}
              onChange={(e) =>
                setNewReservation({
                  ...newReservation,
                  noOfTickets: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="scheduleID" className="form-label">
              Payment Status
            </label>
            <input
              type="text"
              className="form-control"
              id="paymentStatus"
              value={newReservation.paymentStatus}
              onChange={(e) =>
                setNewReservation({
                  ...newReservation,
                  paymentStatus: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="scheduleID" className="form-label">
              Booking Status
            </label>
            <input
              type="text"
              className="form-control"
              id="bookingStatus"
              value={newReservation.bookingStatus}
              onChange={(e) =>
                setNewReservation({
                  ...newReservation,
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
        <Button variant="primary" onClick={handleAddReservation}>
          Add Reservation
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReservationAddModal;
