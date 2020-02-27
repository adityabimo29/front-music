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
          <h1 className='h1Home'>welcome to music Byte</h1>
          <br />
          <h4 className='h4Home'>
            lets coloborate to find your partner <br />
            making famouse band music in the future
          </h4>
          {/* <div className='divHome'> */}

          <button style={{ backgroundColor: 'red', text: 'white' }}>
            <Link style={{ text: 'white' }} to={'/login'}>
              LOGIN
            </Link>
          </button>
          <span>
            {' '}
            <Button style={{ backgroundColor: 'red', color: 'White' }}>
              <Link style={{ text: 'white' }} to={'/register'}>
                SIGNUP
              </Link>
            </Button>
          </span>

          {/* </div> */}
        </Col>
      </Row>
      <Row>AboutUs</Row>
      <Row>Elementor</Row>
      <Row>Testimoni</Row>
    </div>
  );
}
