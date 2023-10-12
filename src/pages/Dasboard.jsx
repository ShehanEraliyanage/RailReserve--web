import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  BiCartAdd,
  BiTrain,
  BiUser,
  BiCalendar,
  BiGroup,
} from "react-icons/bi";

const CountCard = ({ count, label, icon }) => {
  return (
    <Card bg="primary" text="white" className="shadow-sm rounded p-3">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="fs-2 mb-0">{count}</h3>
            <p className="fs-5">{label}</p>
          </div>
          {icon}
        </div>
      </Card.Body>
    </Card>
  );
};

const Dashboard = () => {
  return (
    <Container
      fluid
      className="min-vh-100 mt-4"
      style={{ background: "#E0E0E0" }}
    >
      <Row>
        <Col md={4} className="mb-4 mt-4">
          <CountCard
            count={10}
            label="Trains"
            icon={<BiTrain className="fs-1" />}
          />
        </Col>
        <Col md={4} className="mb-4 mt-4">
          <CountCard
            count={15}
            label="Users"
            icon={<BiUser className="fs-1" />}
          />
        </Col>
        <Col md={4} className="mb-4 mt-4">
          <CountCard
            count={20}
            label="Reservations"
            icon={<BiCalendar className="fs-1" />}
          />
        </Col>
        <Col md={4} className="mb-4 mt-4">
          <CountCard
            count={5}
            label="Travelers"
            icon={<BiGroup className="fs-1" />}
          />
        </Col>
        <Col md={4} className="mb-4 mt-4">
          <CountCard
            count={5}
            label="Agents"
            icon={<BiUser className="fs-1" />}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
