import React from "react";
import "../assets/css/Signup.css";
//React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Signup(props) {
  return (
    <div>
      <Container className="signup-container">
        <Row>
          <Col>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridfirstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="text" placeholder="Firstname" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridlastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" placeholder="Lastname" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridInstrument">
              <Form.Label>Instrument</Form.Label>
              <Form.Control as="select">
                <option>Guitarist</option>
                <option>Keyboardist</option>
                <option>Bassist</option>
                <option>Drummer</option>
                <option>Singer</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridGenre">
                <Form.Label>Genre</Form.Label>
                <Form.Control as="select">
                  <option>Pop</option>
                  <option>Jazz</option>
                  <option>Rock</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridExperience">
                <Form.Label>Experience</Form.Label>
                <Form.Control type="text" placeholder="Experience" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridVideo">
              <Form.Label>Link Video</Form.Label>
              <Form.Control
                type="url"
                name="url"
                id="url"
                placeholder="https://example.com"
              />
            </Form.Group>

            <Form.Group controlId="Form.ControlTextarea1">
              <Form.Label>About</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
