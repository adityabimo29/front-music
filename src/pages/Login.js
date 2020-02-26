import React from 'react';
import { connect } from 'react-redux';
//Utilities
import { login } from '../actions';
import { withRouter } from 'react-router-dom';
//React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//STYLE
import '../assets/css/Login.css';
//Utilities
import { Formik } from 'formik';

function Login(props) {
  return (
    <div>
      <Container className='login-container'>
        <Row>
          <Col>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, actions) => {
                props.login(values, props.history);
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
                /* and other goodies */
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label className='login-label'>
                      Email address
                    </Form.Label>
                    <Form.Control
                      type='email'
                      name='email'
                      placeholder='Enter email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                  </Form.Group>

                  <Form.Group controlId='formBasicPassword'>
                    <Form.Label className='login-label'>Password</Form.Label>
                    <Form.Control
                      type='password'
                      name='password'
                      placeholder='Password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                  </Form.Group>

                  <Form.Group controlId='formBasicCheckbox'>
                    <Form.Check type='checkbox' label='Check me out' />
                  </Form.Group>
                  <Button
                    variant='primary'
                    type='submit'
                    disabled={isSubmitting}
                  >
                    Submit
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
    login: values => {
      dispatch(login(values));
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);
