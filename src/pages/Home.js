import React from 'react';
import '../assets/css/Home.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

// import { Autoplay } from 'swiper/js/swiper.esm';
export default function Home() {
  return (
    <div>
      <Container fluid className='HomeContainer'>
        <Col xl={{ span: 4, offset: 4 }} className='WelcomeMain'>
          <Col xl className='SignContainer'>
            <Col xl className='SignLogoContainer'>
              <img src={Logo} alt='Music Byte' className='MusicByteLogo' />
            </Col>
            <Col xl className='SignTitleContainer'>
              <h1>Welcome to Music Byte!</h1>
            </Col>
            <Col xl className='SignTitleContainer'>
              <p>
                A social network for Musicians.
                <br />
                Collaborate, form a band and play music together!
              </p>
            </Col>
            <Row>
              <Col xl className='SignButtonContainer'>
                <Button variant='outline-info' className='SignIn'>
                  <Link to='/login'>Sign In</Link>
                </Button>
                <Button variant='outline-info' className='SignUp'>
                  <Link to='/register'>Sign Up</Link>
                </Button>
              </Col>
            </Row>
          </Col>
          <p className='Copyright'>Copyright © Music Byte 2020.</p>
        </Col>
      </Container>
    </div>
  );
}
