import React, { Component } from 'react';
import '../assets/css/Support.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Support extends Component {
  render() {
    return (
      <div>
        <Container fluid className='SupportContainer'>
          <Row>
            <Col xl={{ span: 4, offset: 4 }} className='Policy'>
              <h1>Welcome to Music Byte Support Center</h1>
              <p>
                We will always try to help and assist you, but please make sure
                to read our FAQ before you contact us.
              </p>
              <Link to='/'>
                <Button variant='outline-info' className='PolicyButton'>
                  Return Home
                </Button>
              </Link>
              <Link to='/about'>
                <Button variant='outline-info' className='PolicyButton'>
                  Return About
                </Button>
              </Link>
              <Button variant='outline-info'>Read FAQ</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
