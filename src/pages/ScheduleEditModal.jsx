import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

import { editSchedule } from "../Controllers/schedule";

const ScheduleEditModal = ({ show, handleClose, schedule }) => {
  const [editedSchedule, setEditedSchedule] = useState({
    stopPlaceAndTime: [],
  });

  useEffect(() => {
    console.log(schedule);
    if (schedule) {
      console.log(schedule);
      setEditedSchedule({
        id: schedule.id,
        trainId: schedule.trainId,
        startingTime: schedule.startingTime,
        arrivalTime: schedule.arrivalTime,
        startingPlace: schedule.startingPlace,
        destination: schedule.destination,
        stopPlaceAndTime: [...schedule.stopPlaceAndTime],
        price: schedule.price,
      });
    } else {
      setEditedSchedule({
        id: "",
        trainId: "",
        startingTime: "",
        arrivalTime: "",
        startingPlace: "",
        destination: "",
        stopPlaceAndTime: [],
        price: "",
      });
    }
  }, [schedule]);

  const handleSaveChanges = () => {
    Swal.fire({
      title: "Edit Schedule",
      text: "Are you sure you want to edit this schedule?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, edit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        editSchedule({
          id: editedSchedule.id,
          trainId: editedSchedule.trainId,
          startingTime: editedSchedule.startingTime,
          arrivalTime: editedSchedule.arrivalTime,
          startingPlace: editedSchedule.startingPlace,
          destination: editedSchedule.destination,
          stopPlaceAndTime: [...editedSchedule.stopPlaceAndTime],
          price: editedSchedule.price,
        })
          .then((result) => {
            if (result) {
              Swal.fire({
                icon: "success",
                title: "Schedule Edit Successfully",
                showConfirmButton: false,
                timer: 2500,
              });
            }
          })
          .then(() => {
            window.location.href = "/schedule";
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops! Something went wrong.",
              text: error.message,
            });
          });
      }
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Schedule</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Schedule ID</Form.Label>
            <Form.Control type="text" value={editedSchedule.id} readOnly />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Train ID</Form.Label>
            <Form.Control
              type="text"
              value={editedSchedule.trainId}
              onChange={(e) =>
                setEditedSchedule({
                  ...editedSchedule,
                  trainId: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Starting Time</Form.Label>
            <Form.Control
              type="text"
              value={editedSchedule.startingTime}
              onChange={(e) =>
                setEditedSchedule({
                  ...editedSchedule,
                  startingTime: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Arrival Time</Form.Label>
            <Form.Control
              type="text"
              value={editedSchedule.arrivalTime}
              onChange={(e) =>
                setEditedSchedule({
                  ...editedSchedule,
                  arrivalTime: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Starting Place</Form.Label>
            <Form.Control
              type="text"
              value={editedSchedule.startingPlace}
              onChange={(e) =>
                setEditedSchedule({
                  ...editedSchedule,
                  startingPlace: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Destination</Form.Label>
            <Form.Control
              type="text"
              value={editedSchedule.destination}
              onChange={(e) =>
                setEditedSchedule({
                  ...editedSchedule,
                  destination: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Arrival Time</Form.Label>
            <Form.Control
              type="text"
              value={editedSchedule.arrivalTime}
              onChange={(e) =>
                setEditedSchedule({
                  ...editedSchedule,
                  arrivalTime: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Starting Place</Form.Label>
            <Form.Control
              type="text"
              value={editedSchedule.startingPlace}
              onChange={(e) =>
                setEditedSchedule({
                  ...editedSchedule,
                  startingPlace: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Destination</Form.Label>
            <Form.Control
              type="text"
              value={editedSchedule.destination}
              onChange={(e) =>
                setEditedSchedule({
                  ...editedSchedule,
                  destination: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Stop Places & Times</Form.Label>
            {editedSchedule.stopPlaceAndTime &&
              editedSchedule.stopPlaceAndTime.map((stop, index) => (
                <div key={index} className="d-flex">
                  <Form.Control
                    type="text"
                    value={stop.place}
                    onChange={(e) => {
                      const updatedStops = [...editedSchedule.stopPlaceAndTime];
                      updatedStops[index].place = e.target.value;
                      setEditedSchedule({
                        ...editedSchedule,
                        stopPlaceAndTime: updatedStops,
                      });
                    }}
                    className="mr-2"
                    placeholder="Place"
                  />
                  <Form.Control
                    type="text"
                    value={stop.time}
                    onChange={(e) => {
                      const updatedStops = [...editedSchedule.stopPlaceAndTime];
                      updatedStops[index].time = e.target.value;
                      setEditedSchedule({
                        ...editedSchedule,
                        stopPlaceAndTime: updatedStops,
                      });
                    }}
                    placeholder="Time"
                  />
                </div>
              ))}
            <Button
              variant="secondary"
              onClick={() => {
                const updatedStops = [
                  ...editedSchedule.stopPlaceAndTime,
                  { place: "", time: "" },
                ];
                setEditedSchedule({
                  ...editedSchedule,
                  stopPlaceAndTime: updatedStops,
                });
              }}
            >
              Add Stop
            </Button>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              value={editedSchedule.price}
              onChange={(e) =>
                setEditedSchedule({ ...editedSchedule, price: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ScheduleEditModal;
