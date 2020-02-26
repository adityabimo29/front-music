import React from "react";
//
import { Formik } from "formik";
import { signup } from "../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../assets/css/Signup.css";
//React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function Register(props) {
  return (
    <div className="registerBg">
      <Container className="signup-container">
        <Row>
          <Col>
            <Formik
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                id_instrument: "",
                id_genre: "",
                experience: "",
                link_video: "",
                about: ""
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
              console.log(values)
                props.signup(values, props.history);
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
                    <Form.Group as={Col} controlId="first_name">
                      <Form.Label className="reg-label">Firstname</Form.Label>
                      <Form.Control
                        type="text"
                        name="first_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.first_name}
                        placeholder="Firstname"
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="last_name">
                      <Form.Label className="reg-label">Lastname</Form.Label>
                      <Form.Control
                        type="text"
                        name="last_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.last_name}
                        placeholder="Lastname"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="email">
                      <Form.Label className="reg-label">Email</Form.Label>
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
                      <Form.Label className="reg-label">Password</Form.Label>
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

                  <Form.Group controlId="id_instrument">
                     <Form.Label className="reg-label">Instrument</Form.Label>
                    <Form.Control
                      as="select"
                      name="id_instrument"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      // value={values.id_instrument}
                    >
                      <option >select...</option>
                      <option value={1}>Guitarist</option>
                      <option value={2}>Keyboardist</option>
                      <option value={3}>Bassist</option>
                      <option value={4}>Drummer</option>
                      <option value={5}>Singer</option>
                      <option value={6}>Other</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="reg-label">Genre</Form.Label>
                    <Col>
                      <Form.Check
                        type="radio"
                        inline
                        label="Pop"
                        name="id_genre"
                        id="Pop"
                        value={1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Form.Check
                        type="radio"
                        inline
                        label="Jazz"
                        name="id_genre"
                        id="Jazz"
                        value={2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Form.Check
                        type="radio"
                        inline
                        label="Rock"
                        name="id_genre"
                        id="Rock"
                        value={3}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group controlId="experience">
                    <Form.Label className="reg-label">Experience</Form.Label>
                    <Form.Control
                      type="number"
                      name="experience"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.experience}
                      placeholder="Experience in years"
                    />
                  </Form.Group>

                  <Form.Group controlId="link_video">
                    <Form.Label className="reg-label">Link Video</Form.Label>
                    <Form.Control
                      type="url"
                      name="link_video"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.link_video}
                      placeholder="https://example.com"
                    />
                  </Form.Group>

                  <Form.Group controlId="about">
                    <Form.Label className="reg-label">About</Form.Label>
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
    signup: (values, history) => dispatch(signup(values, history))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Register));
