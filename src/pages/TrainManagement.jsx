import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import TrainRegistrationModal from "./TrainRegistrationModal";
import { getTrain } from "../Controllers/train";

const TrainManagement = () => {
  const [trainList, setTrainList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    getTrain().then((result) => {
      setTrainList(result);
    });
  }, []);

  function deleteTrain(trainId) {
    Swal.fire({
      title: "Delete Train?",
      text: "Are you sure you want to delete this train?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "The train has been deleted.", "success");
      }
    });
  }

  return (
    <div className="wrapper">
      <div className="main">
        <main className="content">
          <div className="container-fluid">
            <div className="header">
              <h1 className="header-title">Train Management</h1>
              <Link
                className="btn btn-primary ml-auto mb-2"
                onClick={handleShowModal}
              >
                Add Train
              </Link>
            </div>

            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <table id="example" className="table table-striped my">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Classes</th>
                        <th>Seats</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trainList.map((train, index) => (
                        <tr key={index}>
                          <td>{train.id}</td>
                          <td>{train.name}</td>
                          <td>{train.classes.join(", ")}</td>
                          <td>{train.seats}</td>
                          <td className="table-action">
                            <div
                              className="mx-auto"
                              style={{
                                display: "flex",
                                gap: "1px",
                                paddingRight: "100px",
                              }}
                            >
                              <Link to={`/train/edit/${train.id}`}>
                                <button className="btn btn-pill btn-primary btn-sm  ">
                                  Edit
                                </button>
                              </Link>
                              <button
                                className="btn btn-pill btn-danger btn-sm "
                                onClick={() => deleteTrain(train.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <TrainRegistrationModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default TrainManagement;
