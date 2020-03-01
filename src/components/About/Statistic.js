import React from 'react';
import '../../assets/css/Statistic.css';
import CountUp from 'react-countup';
import { Container, Row, Col } from 'react-bootstrap';

function Statistic() {
  return (
    <div>
      <Container fluid className='StatisticContainer'>
        <Row className='StatisticRow'>
          <Col xl>
            <div>
              <h1>
                <CountUp delay={1} end={45} />
              </h1>
              ---
              <h6>Live Concerts</h6>
            </div>
          </Col>
          <Col xl>
            <div>
              <h1>
                <CountUp delay={1} end={172} />
              </h1>
              ---
              <h6>Album Launched</h6>
            </div>
          </Col>
          <Col xl>
            <div>
              <h1>
                <CountUp delay={1} end={352} />
              </h1>
              ---
              <h6>Band Created</h6>
            </div>
          </Col>
          <Col xl>
            <div>
              <h1>
                <CountUp delay={1} end={1893} />
              </h1>
              ---
              <h6>Musicians Joined</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Statistic;
