import React from "react"
// material ui
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
//form control select
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
//Radio button
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
//
// import { Link as NavLink } from "react-router-dom";
import { Formik } from "formik";
import { signup } from "../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Yup from "yup";
//style
import "../assets/css/Register.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  form: {
    width: "100%", // Fix IE 11 issue.
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
    type: "dark",
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ff4400"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

const SignupSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    // .min(8, "min 8 characters")
    .required("Required"),
  id_instrument: Yup.number()
    .required("Required"),
  id_genre: Yup.number()
    .required("Required")
});


function Register(props) {
  const classes = useStyles();

  return (
    <div className="registerBg">
      <ThemeProvider theme={color}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
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
                // console.log(values.id_genre)
                console.log("Values Register", {...values, id_genre:parseInt(values.id_genre)});
                props.signup({...values, id_genre:parseInt(values.id_genre)}, props.history);
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
                <form
                  onSubmit={handleSubmit}
                  autoComplete="off"
                  className={classes.form}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        className={classes.root}
                        InputProps={{
                          className: classes.input
                        }}
                        required
                        type="text"
                        name="first_name"
                        id="first_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.first_name}
                        fullWidth
                        label="First Name"
                        autoFocus
                      />{" "}
                      {errors.first_name && touched.first_name ? (
                        <div>{errors.first_name}</div>
                      ) : null}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        type="text"
                        name="last_name"
                        id="last_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.last_name}
                        label="Last Name"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        label="Email Address"
                      />{" "}
                      {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                      ) : null}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        type="password"
                        id="password"
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
                        <InputLabel id="demo-simple-select-required-label">
                          Instrument
                        </InputLabel>
                        <Select
                          id="id_instrument"
                          name="id_instrument"
                          onChange={handleChange}
                          onBlur={handleBlur}
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
                        {/* <FormHelperText>Required</FormHelperText> */}
                      </FormControl>{" "}
                      {errors.id_instrument && touched.id_instrument ? (
                        <div>{errors.id_instrument}</div>
                      ) : null}
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControlradio}
                        required
                      >
                        <FormLabel component="legend">Genre</FormLabel>
                        <RadioGroup
                          row
                          aria-label="genre"
                          name="id_genre"
                          id="id_genre"
                          value={values.id_genre}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value='1'
                            control={<Radio color="primary" size="small" />}
                            label="Pop"
                            

                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio color="primary" size="small" />}
                            label="Jazz"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio color="primary" size="small" />}
                            label="Rock"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Experience (in years)"
                        type="number"
                        name="experience"
                        id="experience"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.experience}
                        // InputLabelProps={{
                        //   shrink: true
                        // }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        type="url"
                        name="link_video"
                        id="link_video"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.link_video}
                        placeholder="https://example.com"
                        label="Link video"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="About"
                        placeholder="please tell about yourself"
                        multiline
                        rows="4"
                        name="about"
                        id="about"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.about}
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={props.isSubmitting}
                  >
                    Sign Up
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    signup: (values, history) => dispatch(signup(values, history))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Register));
