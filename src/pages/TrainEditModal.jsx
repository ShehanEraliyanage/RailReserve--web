import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MultiSelect } from "react-multi-select-component";

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
        classes: train.classes, // Set the initial classes
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
    // Update the classes with the selected classes
    setEditedTrain({
      ...editedTrain,
      classes: selectedClasses.map((option) => option.value),
    });
    handleClose();
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
