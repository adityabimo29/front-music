import React, { Fragment } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import '../assets/css/Home.css';
import { Link } from 'react-router-dom';
// import AboutUs from '../components/AboutUs';
// import Elementor from '../components/Elementor';
// import Testimoni from '../components/Testimoni';
// import { Autoplay } from 'swiper/js/swiper.esm';
export default function Home() {
  return (
    <div className='myPage darken'>
      <Row>
        <Col xs={12} md={12}>
          <p className='h1Home'>welcome to music Byte</p>
          <br />
          <p className='h4Home'>
            lets coloborate to find your partner <br />
            making famouse band music in the future
          </p>
          {/* <div className='divHome'> */}

          <content style={{ marginLeft: '450px' }}>
            <Button
              style={{
                borderRadius: '10%',
                backgroundColor: 'red',
                text: 'white'
              }}
            >
              <Link
                style={{
                  borderRadius: '10%',
                  backgroundColor: 'none',
                  text: 'white'
                }}
                to={'/login'}
              >
                LOGIN
              </Link>
            </Button>
            <span>
              {' '}
              <Button
                style={{
                  borderRadius: '10%',
                  backgroundColor: 'red',
                  color: 'white'
                }}
              >
                <Link style={{ color: 'none' }} to={'/register'}>
                  SIGNUP
                </Link>
              </Button>
            </span>
          </content>
        </Col>
      </Row>
      <Row>AboutUs</Row>
      <Row>Elementor</Row>
      <Row>Testimoni</Row>
    </div>
  );
}
