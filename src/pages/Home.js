import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/js/swiper.esm';
export default function Home() {
  return (
    <div className='myPage'>
      <Row>
        <Col xs={12} md={12}>
          <h1
            style={{ textAlign: 'center', marginTop: '350px', color: 'white' }}
          >
            welcome to music Byte
          </h1>
          <br />
          <h4 style={{ textAlign: 'center', color: 'white' }}>
            lets coloborate to find your partner <br />
            making famouse band music in the future
          </h4>
          <div
            style={{
              alignItems: 'center',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <Button style={{ backgroundColor: '#0d47a1', textAlign: 'center' }}>
              LOGIN
            </Button>
            <span>
              {' '}
              <Button style={{ marginLeft: '10px' }}>SIGNUP</Button>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
