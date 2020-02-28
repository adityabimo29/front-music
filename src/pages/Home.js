import React from 'react';
import '../assets/css/Home.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import { Autoplay } from 'swiper/js/swiper.esm';
export default function Home() {
  return (
    <div>
      <Container fluid className='HomeContainer'>
        <Col xl={{ span: 5, offset: 4 }} className='WelcomeMain'>
          <Row>
            <Col xl>
              <h1>Welcome to Music Byte</h1>
              <p>
                Lets colaborate to find your partner making famous band music in
                the future
              </p>
            </Col>
          </Row>
          <Row>
            <Col xl>
              <Button variant='outline-info' className='SignIn'>
                <Link to='/login'>Sign In</Link>
              </Button>
              <Button variant='outline-info' className='SignUp'>
                <Link to='/register'>Sign Up</Link>
              </Button>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}
