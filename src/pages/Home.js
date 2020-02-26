import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';
// import { Autoplay } from 'swiper/js/swiper.esm';
export default function Home() {
  return (
    <div className='myPage'>
      <Row>
        <Col xs={12} md={12}>
          <h1 className='h1Home'>welcome to music Byte</h1>
          <br />
          <h4 className='h4Home'>
            lets coloborate to find your partner <br />
            making famouse band music in the future
          </h4>
          <div className='divHome'>
            <Button className=' bg-danger text-white'>
              <Link to={'/login'}>LOGIN</Link>
            </Button>
            <span>
              {' '}
              <Button style={{ backgroundColor: '#EC5252', color: 'White' }}>
                <Link to={'/register'}>SIGNUP</Link>
              </Button>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
