import React from 'react';
import CountUp from 'react-countup';
import { Row, Col } from 'reactstrap';
import '../App.css';
function Elementor() {
  return (
    <div>
      <Row>
        <Col className='MyBCKCOL' lg={12}>
          <content
            style={{
              color: '#ffffff',
              fontFamily: 'Poppins, Sans-serif',
              fontSize: '3rem',
              fontWeight: '600',
              marginTop: '150px',
              display: 'grid',
              gridColumnGap: '20px',
              gridTemplateColumns: '1fr 1fr 1fr 1fr'
            }}
          >
            <p style={{ textAlign: 'center' }}>
              <h1>
                <CountUp delay={3} end={245} />
              </h1>
              ---
              <h6>Band Genres Rock </h6>
            </p>
            <p style={{ textAlign: 'center' }}>
              <h1>
                <CountUp delay={2} end={537} />
              </h1>
              ---
              <h6>Band Genres Pop</h6>
            </p>
            <p style={{ textAlign: 'center' }}>
              <h1>
                <CountUp delay={3} end={1217} />
              </h1>
              ---
              <h6>Success Music Festival</h6>
            </p>
            <p style={{ textAlign: 'center' }}>
              <h1>
                <CountUp delay={5} end={317} />
              </h1>
              ---
              <h6>
                All Bands Sucessfull <br />
                got Sucess Under famous Label
              </h6>
            </p>
          </content>
        </Col>
      </Row>
    </div>
  );
}

export default Elementor;
