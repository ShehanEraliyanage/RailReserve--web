import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MultiSelect } from "react-multi-select-component";

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
    console.log("Train ID:", trainID);
    console.log("Train Name:", trainName);
    console.log(
      "Classes:",
      selectedClasses.map((selectedClass) => selectedClass.value)
    );
    console.log("Seats:", trainSeats);
    handleClose();
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
