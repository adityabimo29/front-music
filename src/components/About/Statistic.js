import React from 'react';
import '../../App.css';
import CountUp from 'react-countup';
import { Container, Row, Col } from 'react-bootstrap';

function Statistic() {
  return (
    <div>
      <Container fluid={true}>
        <Row
          className='MyBCKCOUNT'
          style={{
            //   color: '#ffffff',
            color: 'white',
            // fontFamily: '  Poppins, Sans-serif',
            fontFamily: 'Alfa Slab One',
            fontSize: '3.0rem',
            fontWeight: '600',
            marginTop: '150px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Col xs={12} md={3}>
            <div style={{ textAlign: 'center' }}>
              <h1>
                <CountUp delay={3} end={45} />
              </h1>
              ---
              <h6>Band Genres Rock </h6>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div style={{ textAlign: 'center' }}>
              <h1>
                <CountUp delay={5} end={37} />
              </h1>
              ---
              <h6>Band Genres Pop</h6>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div style={{ textAlign: 'center' }}>
              <h1>
                <CountUp delay={6} end={117} />
              </h1>
              ---
              <h6>Success Music Festival</h6>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div style={{ textAlign: 'center' }}>
              <h1>
                <CountUp delay={5} end={317} />
              </h1>
              ---
              <h6>
                All Bands Sucessfull <br />
              </h6>
            </div>{' '}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Statistic;
