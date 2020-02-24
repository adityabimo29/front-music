import React, { Component } from 'react';
import '../assets/css/Main.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import pic1 from '../assets/images/01.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col className='UserButton'>
              <button>Profile</button>
              <button>Log Out</button>
            </Col>
          </Row>
          <Row>
            <Col lg className='MainContainer'>
              <Carousel className='FakeCards'>
                <Carousel.Item>
                  <img className='d-block w-100' src={pic1} alt='John Snow' />
                  <Carousel.Caption className='CardData'>
                    <h3>John Snow</h3>
                    <p>Role: Guitarist</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className='d-block w-100' src={pic2} alt='Ygritte' />
                  <Carousel.Caption className='CardData'>
                    <h3>Ygritte</h3>
                    <p>Role: Singer</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className='d-block w-100' src={pic3} alt='Arya Stark' />
                  <Carousel.Caption className='CardData'>
                    <h3>Arya Stark</h3>
                    <p>Role: Drummer</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <Row>
            <Col lg className='InterestButton'>
              <button>
                <i class='fa fa-check-square-o fa-4x' aria-hidden='true'></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
