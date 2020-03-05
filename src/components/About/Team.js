import React, { Component } from 'react';
import '../../assets/css/Team.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Avatar1 from '../../assets/images/teammember1.jpeg';
import Avatar2 from '../../assets/images/teammember2.jpeg';
import Avatar3 from '../../assets/images/teammember3.jpeg';
import Avatar4 from '../../assets/images/teammember4.jpeg';

export default class Team extends Component {
  render() {
    return (
      <div>
        <Container fluid className='TeamContainer'>
          <Row>
            <Col>
              <h3>Music Byte Creator</h3>
            </Col>
          </Row>
          <Row>
            <Col xl className='CardContainer'>
              <Card bg='dark' className='TeamCard'>
                <Card.Img variant='top' src={Avatar1} />
                <Card.Body>
                  <Card.Title className='CardTitle'>
                    <p>Aditya Bimo</p>
                  </Card.Title>
                  <Card.Text>
                    <p>Full Stack Dev</p>
                    <p>Our team leader who handle the Front and Back End.</p>
                  </Card.Text>
                  <Button variant='outline-info'>View Github</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xl className='CardContainer'>
              <Card bg='dark' className='TeamCard'>
                <Card.Img variant='top' src={Avatar2} />
                <Card.Body>
                  <Card.Title className='CardTitle'>
                    <p>Frans Jesky</p>
                  </Card.Title>
                  <Card.Text>
                    <p>Front End Dev</p>A passionate Front End dev who focussed
                    on UI/UX designs.
                  </Card.Text>
                  <Button variant='outline-info'>View Github</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xl className='CardContainer'>
              <Card bg='dark' className='TeamCard'>
                <Card.Img variant='top' src={Avatar4} />
                <Card.Body>
                  <Card.Title className='CardTitle'>
                    <p>Indra Surya</p>
                  </Card.Title>
                  <Card.Text>
                    <p>Front End Dev</p>
                    Our team senior with most experience as Front End dev
                  </Card.Text>
                  <Button variant='outline-info'>View Github</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xl className='CardContainer'>
              <Card bg='dark' className='TeamCard'>
                <Card.Img variant='top' src={Avatar3} />
                <Card.Body>
                  <Card.Title className='CardTitle'>
                    <p>Elinda</p>
                  </Card.Title>
                  <Card.Text>
                    <p>Front End Dev</p>
                    The only girl in our team with high dedication on
                    programmnig
                  </Card.Text>
                  <Button variant='outline-info'>View Github</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
