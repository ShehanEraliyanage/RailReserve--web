import React from "react";

const Dashboard = () => {
  return (
    <div
      className="container-fluid min-vh-100 mt-4"
      style={{ background: "#E0E0E0" }}
    >
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card bg-primary text-white shadow-sm rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3 className="fs-2 mb-0">230</h3>
                <p className="fs-5">Products</p>
              </div>
              <i className="bi bi-cart-plus fs-1"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-success text-white shadow-sm rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3 className="fs-2 mb-0">230</h3>
                <p className="fs-5">Products</p>
              </div>
              <i className="bi bi-cart-plus fs-1"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-info text-white shadow-sm rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3 className="fs-2 mb-0">230</h3>
                <p className="fs-5">Products</p>
              </div>
              <i className="bi bi-cart-plus fs-1"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-info text-white shadow-sm rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3 className="fs-2 mb-0">230</h3>
                <p className="fs-5">Products</p>
              </div>
              <i className="bi bi-cart-plus fs-1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
