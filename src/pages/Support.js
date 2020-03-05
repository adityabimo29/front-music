import React, { Component } from "react";
import "../assets/css/Support.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//
import "../assets/css/Login.css";
import { Grid, TextField } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";


const color = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#15a2b8"
    }
  }
});

export default class Support extends Component {
  render() {
    return (
      <div>
        <Container fluid className="SupportContainer">
          <Row>
            <Col xl={{ span: 4, offset: 4 }} className="Policy">
              <h1>Welcome to Music Byte Support Center</h1>
              <p>We will always try to help and assist you</p>
              <Link to="/">
                <Button variant="outline-info" className="PolicyButton">
                  Return Home
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline-info">Return About</Button>
              </Link>
            </Col>
          </Row>

          <Row>
            <Col xl={{ span: 4, offset: 4 }} className="Policy">
             
              <ThemeProvider theme={color}>
              <Grid
                container
                alignItems="center"
                direction="column"
                // className="SignFormContainer"
              >
                <h2>Contact Us</h2>

                <form>
                <TextField
                    fullWidth
                    
                    type="text"
                    name="name"
                    id="standard-basic"
                    label="Name"
                    className="TextField"      
                  />
                  <TextField
                    fullWidth
                    
                    type="email"
                    name="email"
                    id="standard-basic"
                    label="Email"
                    className="TextField"      
                  />

                  <TextField
                    fullWidth
                    
                    multiline
                    rows="3"
                    type="text"
                    name="message"
                    id="standard-basic"
                    label="Message"
                    className="TextField"
                    
                  />

                  <Button
                    variant="outline-info"
                    type="submit"
                    className="SignInLoginPage"
                  >
                    Send
                  </Button>
                </form>
              </Grid>
              </ThemeProvider>
            </Col>
          </Row>
        </Container>

        {/* <div>
          <ThemeProvider theme={color}>
            <Container maxWidth="xl" className="SigninContainer">
              <Grid xl={{ span: 6 }}>
                <Grid
                  container
                  alignItems="center"
                  direction="column"
                  className="SignFormContainer"
                >
                  <h1>Sign In</h1>

                  <form>
                    <TextField
                      fullWidth
                      required
                      type="email"
                      name="email"
                      id="standard-basic"
                      label="Email Address"
                      className="TextField"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountBox />
                          </InputAdornment>
                        )
                      }}
                    />

                    <TextField
                      fullWidth
                      required
                      type="password"
                      name="password"
                      id="standard-basic"
                      label="Password"
                      className="TextField"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Key />
                          </InputAdornment>
                        )
                      }}
                    />

                    <Button
                      variant="outline-info"
                      type="submit"
                      className="SignInLoginPage"
                    >
                      Submit
                    </Button>
                  </form>
                </Grid>

                <Grid
                  container
                  justify="space-between"
                  className="SignInOption"
                >
                  <Grid>
                    <Link to="/">
                      <p className="SignInOptionLink">
                        <i className="fas fa-caret-left"></i> Go back
                      </p>
                    </Link>
                  </Grid>
                  <Grid>
                    <p>
                      New to Music Byte?{" "}
                      <Link to="/register">
                        <span className="SignInOptionLink">
                          Sign up <i className="fas fa-user-plus"></i>
                        </span>
                      </Link>
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </ThemeProvider>
        </div> */}
      </div>
    );
  }
}
