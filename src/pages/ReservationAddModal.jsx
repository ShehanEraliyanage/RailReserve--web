import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { addReservation } from "../Controllers/reservation";
import { getSchedule } from "../Controllers/schedule";
import { getTraveller } from "../Controllers/traveller";

const ReservationAddModal = ({ show, handleClose }) => {
  const [newReservation, setNewReservation] = useState({
    id: "",
    bookingDate: new Date(),
    reservationDate: null,
    noOfTickets: "",
    paymentStatus: "p",
    bookingStatus: "p",
  });
  const [scheduleID, setScheduleID] = useState([]);
  const [traveller, SetTraveller] = useState([]);
  const [selectedScheduleId, setSelectedScheduleId] = useState("");
  const [selectedTravellerNic, setSelectedTravellerNic] = useState("");

  useEffect(() => {
    getSchedule().then((result) => {
      const { data } = result;
      const scheduleIds = data.map((schedule) => schedule.id);
      setScheduleID(scheduleIds);
    });
  }, []);
  useEffect(() => {
    getTraveller().then((result) => {
      const { data } = result;
      const travellers = data.map((traveller) => traveller.nic);
      SetTraveller(travellers);
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
    // console.log(newReservation.id);
    // console.log(selectedScheduleId);
    // console.log(selectedTravellerNic);
    // console.log(formattedBookingDate);
    // console.log(formattedReservationDate);
    // console.log(newReservation.noOfTickets);
    // console.log(newReservation.paymentStatus);
    // console.log(newReservation.bookingStatus);

    if (
      newReservation.id === "" &&
      formattedBookingDate === "" &&
      formattedReservationDate === "" &&
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
      addReservation({
        id: newReservation.id,
        scheduleId: selectedScheduleId,
        travelerId: selectedTravellerNic,
        bookingDate: formattedBookingDate,
        reservationDate: formattedReservationDate,
        noOfTickets: newReservation.noOfTickets,
        paymentStatus: newReservation.paymentStatus,
        bookingStatus: newReservation.bookingStatus,
      })
        .then((result) => {
          if (result) {
            Swal.fire({
              icon: "success",
              title: "Reservation Added Successfully",
              showConfirmButton: false,
              timer: 2500,
            });
          }
        })
        .then(() => {
          window.location.href = "/reservation";
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops! Something went wrong.",
            text: error.message,
          });
        });
    }
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
          <div className="mb-3">
            <label htmlFor="Traveller" className="form-label">
              Select Traveller
            </label>
            <select
              className="form-select"
              id="traveller"
              value={selectedTravellerNic}
              onChange={(e) => setSelectedTravellerNic(e.target.value)}
            >
              <option value="">Select Traveller NIC</option>
              {traveller.map((traveller) => (
                <option key={traveller} value={traveller}>
                  {traveller}
                </option>
              ))}
            </select>
          </div>

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
            <label htmlFor="noOfTickets" className="form-label">
              No. of Tickets (1 to 5)
            </label>
            <input
              type="number"
              className="form-control"
              id="noOfTickets"
              value={newReservation.noOfTickets}
              onInput={(e) => {
                const inputValue = e.target.value;
                const intValue = parseInt(inputValue);

                if (!isNaN(intValue) && intValue >= 1 && intValue <= 5) {
                  setNewReservation({
                    ...newReservation,
                    noOfTickets: inputValue,
                  });
                } else {
                  e.target.value = newReservation.noOfTickets;
                }
              }}
            />
          </div>

          {/* <div className="mb-3">
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
          </div> */}
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
