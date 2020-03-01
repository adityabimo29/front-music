import React from 'react';
import '../assets/css/Login.css';
import { Container, Grid, TextField } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountBox from '@material-ui/icons/AccountBox';
import Key from '@material-ui/icons/VpnKey';
import Button from 'react-bootstrap/Button';
import { withRouter, Link } from 'react-router-dom';
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
          <Grid xl={{ span: 6 }}>
            <Grid
              container
              alignItems='center'
              direction='column'
              className='SignFormContainer'
            >
              <h1>Sign In</h1>
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
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <AccountBox />
                          </InputAdornment>
                        )
                      }}
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
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <Key />
                          </InputAdornment>
                        )
                      }}
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
            <Grid container justify='space-between' className='SignInOption'>
              <Grid>
                <Link to='/'>
                  <p className='SignInOptionLink'>
                    <i className='fas fa-caret-left'></i> Go back
                  </p>
                </Link>
              </Grid>
              <Grid>
                <p>
                  New to Music Byte?{' '}
                  <Link to='/register'>
                    <span className='SignInOptionLink'>
                      Sign up <i className='fas fa-user-plus'></i>
                    </span>
                  </Link>
                </p>
              </Grid>
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
