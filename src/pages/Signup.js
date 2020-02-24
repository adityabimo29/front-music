import React from "react";
import "../assets/css/Signup.css";
//React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//
import { Formik } from "formik";
import { signup } from "../actions";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";

function Signup(props) {

  return (
    <div>
      <Container className="signup-container">
        <Row>
          <Col>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                instrument: "",
                genre: "",
                experience: "",
                url: "",
                about: "",
              }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Email Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, actions) => {
                        props.signup(values);
                    }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} controlId="firstname">
                      <Form.Label>Firstname</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstname}
                        placeholder="Firstname"
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="lastname">
                      <Form.Label>Lastname</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastname}
                        placeholder="Lastname"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Enter email"
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Password"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="instrument">
                    <Form.Label>Instrument</Form.Label>
                    <Form.Control
                      as="select"
                      type="text"
                      name="instrument"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.instrument}
                    >
                      <option>Guitarist</option>
                      <option>Keyboardist</option>
                      <option>Bassist</option>
                      <option>Drummer</option>
                      <option>Singer</option>
                      <option>Other</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="genre">
                      <Form.Label>Genre</Form.Label>
                      <Form.Control
                        as="select"
                        name="genre"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.genre}
                      >
                        <option>Pop</option>
                        <option>Jazz</option>
                        <option>Rock</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="experience">
                      <Form.Label>Experience</Form.Label>
                      <Form.Control
                        type="text"
                        name="experience"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.experience}
                        placeholder="Experience"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="url">
                    <Form.Label>Link Video</Form.Label>
                    <Form.Control
                      type="url"
                      name="url"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.url}
                      placeholder="https://example.com"
                    />
                  </Form.Group>

                  <Form.Group controlId="about">
                    <Form.Label>About</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      name="about"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.about}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    signup: values => dispatch(signup(values))
  };
};

export default connect(null, mapDispatchToProps)(Signup);
