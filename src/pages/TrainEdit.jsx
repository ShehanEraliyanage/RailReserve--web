import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { MultiSelect } from "react-multi-select-component";

const TrainEdit = () => {
  const { id } = useParams();

  const simulatedTrainData = {
    id: "TT500",
    name: "Rajarata tt",
    classes: ["1", "2"],
    seats: "300",
  };

  const [editedTrain, setEditedTrain] = useState({ ...simulatedTrainData });
  const [selectedClasses, setSelectedClasses] = useState(
    simulatedTrainData.classes.map((classId) => ({
      label: `Class ${classId}`,
      value: classId,
    }))
  );

  useEffect(() => {}, [id]);

  const handleEditTrain = () => {};

  const classOptions = ["1", "2", "3"].map((classId) => ({
    label: `Class ${classId}`,
    value: classId,
  }));

  return (
    <div className="train-edit">
      <h2>Edit Train</h2>
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
            onChange={setSelectedClasses}
            labelledBy="Select"
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
        <Button variant="primary" onClick={handleEditTrain}>
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default TrainEdit;
