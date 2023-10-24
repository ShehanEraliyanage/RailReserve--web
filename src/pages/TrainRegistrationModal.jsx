import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MultiSelect } from "react-multi-select-component";
import Swal from "sweetalert2";

import { addTrain } from "../Controllers/train";

const TrainRegistrationModal = ({ show, handleClose }) => {
  const [trainID, setTrainID] = useState("");
  const [trainName, setTrainName] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [trainSeats, setTrainSeats] = useState("");

  const classOptions = [
    { label: "Class 1", value: "1" },
    { label: "Class 2", value: "2" },
    { label: "Class 3", value: "3" },
  ];

  const handleAddTrain = () => {
    const classLabels = selectedClasses.map((classOption) => classOption.value);

    if (
      trainID === "" &&
      trainName === "" &&
      classLabels.length === 0 &&
      trainSeats === ""
    ) {
      Swal.fire("All fields are empty.");
    } else {
      addTrain({
        id: trainID,
        name: trainName,
        classes: classLabels,
        seats: trainSeats,
      })
        .then((result) => {
          if (result) {
            Swal.fire({
              icon: "success",
              title: "Train Added Successfully",
              showConfirmButton: false,
              timer: 2500,
            });
          }
        })
        .then(() => {
          window.location.href = "/train";
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
        <Modal.Title>Register a New Train</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="trainID" className="form-label">
              Train ID
            </label>
            <input
              type="text"
              className="form-control"
              id="trainID"
              value={trainID}
              onChange={(e) => setTrainID(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="trainName" className="form-label">
              Train Name
            </label>
            <input
              type="text"
              className="form-control"
              id="trainName"
              value={trainName}
              onChange={(e) => setTrainName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="trainClasses" className="form-label">
              Classes
            </label>
            <MultiSelect
              options={classOptions}
              value={selectedClasses}
              onChange={setSelectedClasses}
              labelledBy="Select"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="trainSeats" className="form-label">
              Seats
            </label>
            <input
              type="text"
              className="form-control"
              id="trainSeats"
              value={trainSeats}
              onChange={(e) => setTrainSeats(e.target.value)}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddTrain}>
          Save Train
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TrainRegistrationModal;
