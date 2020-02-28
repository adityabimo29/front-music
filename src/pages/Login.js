import React from 'react';
import '../assets/css/Login.css';
import { Container, Grid, TextField } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';
import { Formik } from 'formik';

const color = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#15a2b8'
    }
  }
});

function Login(props) {
  return (
    <div>
      <ThemeProvider theme={color}>
        <Container maxWidth='xl' className='SigninContainer'>
          <Grid xl>
            <Grid
              container
              alignItems='center'
              direction='column'
              className='SignFormContainer'
            >
              <h1>Sign in</h1>
              <Formik
                initialValues={{ email: '', password: '' }}
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
                }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      required
                      type='email'
                      name='email'
                      id='standard-basic'
                      label='Email Address'
                      className='TextField'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <TextField
                      fullWidth
                      required
                      type='password'
                      name='password'
                      id='standard-basic'
                      label='Password'
                      className='TextField'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <Button
                      variant='outline-info'
                      type='submit'
                      className='SignInLoginPage'
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>
                  </form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    login: (values, history) => {
      dispatch(login(values, history));
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Login));
