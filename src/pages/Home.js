import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import '../App.css';
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
          <Button>LOGIN</Button>
          <span>
            {' '}
            <Button style={{ marginLeft: '10px' }}>SIGNUP</Button>
          </span>
        </Col>
      </Row>
    </div>
  );
}
