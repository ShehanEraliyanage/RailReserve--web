import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { MultiSelect } from "react-multi-select-component";

import { editTrain } from "../Controllers/train";

const TrainEditModal = ({ show, handleClose, train }) => {
  const [editedTrain, setEditedTrain] = useState({});
  const [selectedClasses, setSelectedClasses] = useState([]);

  const classOptions = ["1", "2", "3"].map((classId) => ({
    label: `Class ${classId}`,
    value: classId,
  }));

  useEffect(() => {
    if (train) {
      setEditedTrain({
        id: train.id,
        name: train.name,
        classes: train.classes,
        seats: train.seats,
      });
      setSelectedClasses(
        train.classes.map((classId) => ({
          label: `Class ${classId}`,
          value: classId,
        }))
      );
    }
  }, [train]);

  const handleSaveChanges = () => {
    setEditedTrain({
      ...editedTrain,
      classes: selectedClasses.map((option) => option.value),
    });
    const classLabels = selectedClasses.map((classOption) => classOption.value);
    Swal.fire({
      title: "Edit Train",
      text: "Are you sure you want to edit this train?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, edit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        editTrain({
          id: editedTrain.id,
          name: editedTrain.name,
          classes: classLabels,
          seats: editedTrain.seats,
        })
          .then((result) => {
            if (result) {
              Swal.fire({
                icon: "success",
                title: "Train Edit Successfully",
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
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Train</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Train ID</Form.Label>
            <Form.Control type="text" value={editedTrain.id} readOnly />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Train Name</Form.Label>
            <Form.Control
              type="text"
              value={editedTrain.name}
              onChange={(e) =>
                setEditedTrain({ ...editedTrain, name: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Classes</Form.Label>
            <MultiSelect
              options={classOptions}
              value={selectedClasses}
              onChange={(selected) => setSelectedClasses(selected)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Seats</Form.Label>
            <Form.Control
              type="text"
              value={editedTrain.seats}
              onChange={(e) =>
                setEditedTrain({ ...editedTrain, seats: e.target.value })
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

export default TrainEditModal;
