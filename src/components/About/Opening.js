import React, { Component } from 'react';
import '../../assets/css/Opening.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

export default class Opening extends Component {
  render() {
    return (
      <div>
        <Container fluid className='OpeningContainer'>
          <Row>
            <Col xl className='OpeningArticle'>
              <img src={Logo} alt='Music Byte' />
            </Col>
          </Row>
          <Row>
            <Col xl className='OpeningButtons'>
              <Link to='/'>
                <Button variant='outline-info' className='HomeButton'>
                  Return Home
                </Button>
              </Link>
              <Link to='/support'>
                <Button variant='outline-info'>Ask Support</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
