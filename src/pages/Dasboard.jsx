import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BiCartAdd } from "react-icons/bi";

const Dashboard = () => {
  return (
    <Container
      fluid
      className="min-vh-100 mt-4"
      style={{ background: "#E0E0E0" }}
    >
      <Row className="">
        <Col md={4} className="mb-4 mt-4">
          <Card bg="primary" text="white" className="shadow-sm rounded p-3">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="fs-2 mb-0">230</h3>
                  <p className="fs-5">Products</p>
                </div>
                <BiCartAdd className="fs-1" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4 mt-4">
          <Card bg="success" text="white" className="shadow-sm rounded p-3">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="fs-2 mb-0">230</h3>
                  <p className="fs-5">Products</p>
                </div>
                <BiCartAdd className="fs-1" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4 mt-4">
          <Card bg="info" text="white" className="shadow-sm rounded p-3">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="fs-2 mb-0">230</h3>
                  <p className="fs-5">Products</p>
                </div>
                <BiCartAdd className="fs-1" />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4 mt-4">
          <Card bg="info" text="white" className="shadow-sm rounded p-3">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="fs-2 mb-0">230</h3>
                  <p className="fs-5">Products</p>
                </div>
                <BiCartAdd className="fs-1" />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
