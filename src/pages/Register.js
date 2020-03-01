import React from 'react';
import '../assets/css/Register.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import { signup } from '../actions';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import * as Yup from 'yup';

const styles = theme =>  ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },

  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControlradio: {
    margin: theme.spacing(2, 0, 0, 0)
  }
}));

const color = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#15a2b8'
    }
  }
});

const SignupSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    // .min(8, "min 8 characters")
    .required('Required'),
  id_instrument: Yup.number().required('Required'),
  id_genre: Yup.number().required('Required')
});

function Register(props) {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth='xl' className='SignUpContainer'>
        <Grid container justify='center' alignItems='center' direction='column'>
          <ThemeProvider theme={color}>
            <div className={classes.paper}>
              <Formik
                initialValues={{
                  first_name: '',
                  last_name: '',
                  email: '',
                  password: '',
                  id_instrument: '',
                  id_genre: '',
                  experience: '',
                  link_video: '',
                  about: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {
                  console.log('Values Register', {
                    ...values,
                    id_genre: parseInt(values.id_genre)
                  });
                  props.signup(
                    { ...values, id_genre: parseInt(values.id_genre) },
                    props.history
                  );
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  isSubmitting
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    autoComplete='off'
                    className={classes.form}
                  >
                    <Grid
                      container
                      justify='center'
                      alignItems='center'
                      direction='column'
                      className='SignUpForm'
                    >
                      <h1>Sign Up</h1>

                      <Grid container direction='row'>
                        <Grid xl className='FirstName'>
                          <TextField
                            fullWidth
                            className={classes.root}
                            InputProps={{
                              className: classes.input
                            }}
                            required
                            type='text'
                            name='first_name'
                            id='first_name'
                            onChange={handleChange}
                            value={values.first_name}
                            label='First Name'
                          />
                          {errors.first_name && touched.first_name ? (
                            <div>{errors.first_name}</div>
                          ) : null}
                        </Grid>

                        <Grid xl className='LastName'>
                          <TextField
                            fullWidth
                            type='text'
                            name='last_name'
                            id='last_name'
                            onChange={handleChange}
                            value={values.last_name}
                            label='Last Name'
                          />
                        </Grid>
                      </Grid>

                      <TextField
                        required
                        fullWidth
                        type='email'
                        name='email'
                        id='email'
                        onChange={handleChange}
                        value={values.email}
                        label='Email Address'
                        className='TextField'
                      />
                      {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                      ) : null}

                      <TextField
                        required
                        fullWidth
                        name='password'
                        type='password'
                        id='password'
                        onChange={handleChange}
                        value={values.password}
                        label='Password'
                        className='TextField'
                      />
                      {errors.password && touched.password ? (
                        <div>{errors.password}</div>
                      ) : null}

                      <FormControl
                        required
                        fullWidth
                        className={classes.formControl}
                      >
                        <InputLabel
                          id='demo-simple-select-required-label'
                          className='TextField'
                        >
                          Instrument
                        </InputLabel>
                        <Select
                          id='id_instrument'
                          name='id_instrument'
                          onChange={handleChange}
                          value={values.id_instrument}
                          className={classes.selectEmpty}
                        >
                          <MenuItem value={1}>Guitarist</MenuItem>
                          <MenuItem value={2}>Keyboardist</MenuItem>
                          <MenuItem value={3}>Bassist</MenuItem>
                          <MenuItem value={4}>Drummer</MenuItem>
                          <MenuItem value={5}>Singer</MenuItem>
                          <MenuItem value={6}>Others</MenuItem>
                        </Select>
                      </FormControl>
                      {errors.id_instrument && touched.id_instrument ? (
                        <div>{errors.id_instrument}</div>
                      ) : null}

                      <FormControl
                        component='fieldset'
                        className={classes.formControlradio}
                        required
                      >
                        <FormLabel component='legend'>Genre</FormLabel>
                        <RadioGroup
                          row
                          aria-label='genre'
                          name='id_genre'
                          id='id_genre'
                          value={values.id_genre}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          label="Password"
                        />{" "}
                        {errors.password && touched.password ? (
                          <div>{errors.password}</div>
                        ) : null}
                      </Grid>

                      <Grid item xs={12}>
                        <FormControl
                          required
                          fullWidth
                          className={classes.formControl}
                        >
                          <FormControlLabel
                            value='1'
                            control={<Radio color='primary' size='small' />}
                            label='Pop'
                          />
                          <FormControlLabel
                            value='2'
                            control={<Radio color='primary' size='small' />}
                            label='Jazz'
                          />
                          <FormControlLabel
                            value='3'
                            control={<Radio color='primary' size='small' />}
                            label='Rock'
                          />
                        </RadioGroup>
                      </FormControl>

                      <TextField
                        fullWidth
                        label='Experience (years)'
                        type='number'
                        name='experience'
                        id='experience'
                        onChange={handleChange}
                        value={values.experience}
                      />

                      <TextField
                        fullWidth
                        type='url'
                        name='link_video'
                        id='link_video'
                        onChange={handleChange}
                        value={values.link_video}
                        placeholder='www.youtube.com/watch?v=5gvofiXHbUI'
                        label='Youtube Video URL'
                        className='TextField'
                      />

                      <TextField
                        fullWidth
                        label='About'
                        placeholder='Tell us about yourself'
                        multiline
                        rows='3'
                        name='about'
                        id='about'
                        onChange={handleChange}
                        value={values.about}
                        className='TextField'
                      />

                      <Button
                        variant='outline-info'
                        type='submit'
                        color='primary'
                        className={classes.submit}
                        disabled={props.isSubmitting}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </form>
                )}
              </Formik>
              <Grid container justify='space-between' className='SignUpOption'>
                <Grid xl>
                  <Link to='/'>
                    <p className='SignUpOptionLink'>
                      <i class='fas fa-caret-left'></i> Go back
                    </p>
                  </Link>
                </Grid>
                <Grid xl>
                  <p>
                    Have account?{' '}
                    <Link to='/login'>
                      <span className='SignUpOptionLink'>
                        Sign in <i class='fas fa-sign-in-alt'></i>
                      </span>
                    </Link>
                  </p>
                </Grid>
              </Grid>
            </div>
          </ThemeProvider>
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    roles: state.rolesgenre.roles,
    genres: state.rolesgenre.genres
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signup: (values, history) => dispatch(signup(values, history)),
    getRoles: () => dispatch(getRoles()),
    getGenres: () => dispatch(getGenres())
  };
};

export default withRouter(withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Register))
);
