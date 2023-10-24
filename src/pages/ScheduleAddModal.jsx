import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import CustomTimePicker from "../components/CustomTimePicker";
import Swal from "sweetalert2";

import { getTrain } from "../Controllers/train";
import { addSchedule } from "../Controllers/schedule";

const ScheduleAddModal = ({ show, handleClose }) => {
  const [schedule, setSchedule] = useState({
    id: "",
    trainId: null,
    startingTime: null,
    arrivalTime: null,
    startingPlace: "",
    destination: "",
    stopPlaceAndTime: [{ place: "", time: "" }],
    price: "",
  });

  const [trainOptions, setTrainOptions] = useState([]);

  useEffect(() => {
    getTrain().then((result) => {
      const trainData = result.data;
      const options = trainData.map((train) => ({
        value: train.id,
        label: train.name,
      }));
      setTrainOptions(options);
    });
  }, []);

  const handleAddSchedule = async () => {
    if (
      schedule.id === "" &&
      schedule.trainId === null &&
      schedule.startingTime === null &&
      schedule.arrivalTime === null &&
      schedule.destination === "" &&
      schedule.startingPlace === "" &&
      schedule.price === "" &&
      schedule.stopPlaceAndTime.length < 2
    ) {
      Swal.fire("All fields are empty.");
    } else {
      addSchedule({
        id: schedule.id,
        trainId: schedule.trainId,
        startingTime: schedule.startingTime,
        arrivalTime: schedule.arrivalTime,
        startingPlace: schedule.startingPlace,
        destination: schedule.destination,
        stopPlaceAndTime: schedule.stopPlaceAndTime,
        price: schedule.price,
      })
        .then((result) => {
          if (result) {
            Swal.fire({
              icon: "success",
              title: "Schedule Added Successfully",
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
  };

  const handleTrainChange = (selectedOption) => {
    setSchedule({ ...schedule, trainId: selectedOption.value });
  };

  const handleStartingTimeChange = (value) => {
    setSchedule({ ...schedule, startingTime: value });
  };

  const handleArrivalTimeChange = (value) => {
    setSchedule({ ...schedule, arrivalTime: value });
  };

  const addStopPlaceTimeField = (e) => {
    e.preventDefault(); // Prevent the default form submission
    const updatedStopPlaceAndTime = [
      ...schedule.stopPlaceAndTime,
      { place: "", time: "" },
    ];
    setSchedule({ ...schedule, stopPlaceAndTime: updatedStopPlaceAndTime });
  };

  const handleStopPlaceTimeChange = (index, field, value) => {
    const updatedStopPlaceAndTime = [...schedule.stopPlaceAndTime];
    updatedStopPlaceAndTime[index][field] = value;
    setSchedule({ ...schedule, stopPlaceAndTime: updatedStopPlaceAndTime });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Schedule</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="scheduleID" className="form-label">
              Schedule ID
            </label>
            <input
              type="text"
              className="form-control"
              id="scheduleID"
              value={schedule.id}
              onChange={(e) => setSchedule({ ...schedule, id: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="trainId" className="form-label">
              Train ID
            </label>
            <Select
              id="trainId"
              options={trainOptions}
              onChange={handleTrainChange}
              value={trainOptions.find(
                (option) => option.value === schedule.trainId
              )}
              placeholder="Select a train..."
            />
          </div>
          <div className="mb-3">
            <div className="d-flex flex-column">
              <label htmlFor="startingTime" className="form-label">
                Starting Time
              </label>
              <CustomTimePicker
                value={schedule.startingTime}
                onChange={handleStartingTimeChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex flex-column">
              <label htmlFor="arrivalTime" className="form-label">
                Arrival Time
              </label>
              <CustomTimePicker
                value={schedule.arrivalTime}
                onChange={handleArrivalTimeChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="startingPlace" className="form-label">
              Starting Place
            </label>
            <input
              type="text"
              className="form-control"
              id="startingPlace"
              value={schedule.startingPlace}
              onChange={(e) =>
                setSchedule({
                  ...schedule,
                  startingPlace: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="destination" className="form-label">
              Destination
            </label>
            <input
              type="text"
              className="form-control"
              id="destination"
              value={schedule.destination}
              onChange={(e) =>
                setSchedule({
                  ...schedule,
                  destination: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Stop Place and Time</label>
            {schedule.stopPlaceAndTime.map((item, index) => (
              <div className="d-flex mb-2" key={index}>
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Place"
                  value={item.place}
                  onChange={(e) =>
                    handleStopPlaceTimeChange(index, "place", e.target.value)
                  }
                />
                <CustomTimePicker
                  value={item.time}
                  onChange={(value) =>
                    handleStopPlaceTimeChange(index, "time", value)
                  }
                />
              </div>
            ))}
            <button
              type="button"
              className="btn btn-primary"
              onClick={addStopPlaceTimeField}
            >
              Add Stop
            </button>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              value={schedule.price}
              onChange={(e) =>
                setSchedule({ ...schedule, price: e.target.value })
              }
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddSchedule}>
          Save Schedule
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ScheduleAddModal;
