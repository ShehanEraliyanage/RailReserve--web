import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/LoginPage.css";

function Login() {
  return (
    <Container fluid className="login-container">
      <Row>
        <Col>
          <div className="login-form">
            <h2>Login</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
