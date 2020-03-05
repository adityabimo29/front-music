import React, { Component } from "react";
import "../assets/css/Support.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//
import "../assets/css/Login.css";
import { Grid, TextField } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
//
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
//
import { Jumbotron } from "react-bootstrap";

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

          <Jumbotron className="SupportBody">
            <Row>
              <Col xl={{ span: 6, offset: 3 }} className="contactus">
                <ThemeProvider theme={color}>
                  <Grid container alignItems="center" direction="column">
                    <h3 className="title-contact">Contact Us</h3>

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
            <Row>
              <Col xl={{ span: 6, offset: 3 }} className="Adress">
                <h4 className="intouch">Get in Touch with Us</h4>
                <Row className="icon">
                  <LocationOnIcon color="secondary" />
                  <span className="icontext">
                    &nbsp;&nbsp;Jl. Kemang Raya No.10, Bangka
                  </span>
                </Row>
                <Row className="icon">
                  <PhoneIcon color="secondary" />
                  <span className="icontext">&nbsp;&nbsp;(021) 50880128</span>
                </Row>
                <Row className="icon">
                  <MailOutlineIcon color="secondary" />
                  <span className="icontext">
                    &nbsp;&nbsp;info@musicbyte.com
                  </span>
                </Row>
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
