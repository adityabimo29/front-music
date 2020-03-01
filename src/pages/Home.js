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
              <h1>Welcome, Music Lovers!</h1>
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
                <Link to='/login'>
                  <Button variant='outline-info' className='SignIn'>
                    Sign In
                  </Button>
                </Link>
                <Link to='/register'>
                  <Button variant='outline-info' className='SignUp'>
                    Sign Up
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
          <Row>
            <Col className='Information'>
              <Col xl>
                <p>
                  Need help?{' '}
                  <Link to='/about'>
                    <span className='About'>
                      <i class='far fa-play-circle'></i> Learn More
                    </span>
                  </Link>
                </p>
              </Col>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}
