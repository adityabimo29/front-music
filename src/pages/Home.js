import React, { Fragment } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import '../assets/css/Home.css';
import { Link } from 'react-router-dom';

// import { Autoplay } from 'swiper/js/swiper.esm';
export default function Home() {
  return (
    <div className='myPage darken'>
      <Container fluid>
        <Row>
          <Col xs={12} md={12}>
            <p className='h1Home'>welcome to music Byte</p>
            <br />

            <div className='h4Home'>
              lets coloborate to find your partner <br />
              making famouse band music in the future
            </div>
            {/* <div className='divHome'> */}
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            xs={12}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <content style={{ paddingBottom: '100px' }}>
              <Button
                style={{
                  width: '150px',
                  borderRadius: '5%',
                  backgroundColor: 'red',
                  text: 'white'
                }}
              >
                <Link
                  style={{
                    backgroundColor: 'none',
                    text: 'white'
                  }}
                  to={'/login'}
                >
                  LOGIN
                </Link>
              </Button>
              <span>
                <Button
                  style={{
                    marginLeft: '30px',
                    width: '150px',
                    borderRadius: '5%',
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
      </Container>
    </div>
  );
}
