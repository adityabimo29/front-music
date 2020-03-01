import React, { Component } from 'react';
import '../../assets/css/Team.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Avatar from '../../assets/images/github.png';

export default class Team extends Component {
  render() {
    return (
      <div>
        <Container fluid className='TeamContainer'>
          <Row>
            <Col>
              <h3>Music Byte Team</h3>
            </Col>
          </Row>
          <Row>
            <Col xl className='CardContainer'>
              <Card bg='dark' className='TeamCard'>
                <Card.Img variant='top' src={Avatar} />
                <Card.Body>
                  <Card.Title className='CardTitle'>
                    <p>Aditya Bimo</p>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='outline-info'>View Github</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xl className='CardContainer'>
              <Card bg='dark' className='TeamCard'>
                <Card.Img variant='top' src={Avatar} />
                <Card.Body>
                  <Card.Title className='CardTitle'>
                    <p>Frans Jesky</p>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='outline-info'>View Github</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xl className='CardContainer'>
              <Card bg='dark' className='TeamCard'>
                <Card.Img variant='top' src={Avatar} />
                <Card.Body>
                  <Card.Title className='CardTitle'>
                    <p>Indra Surya</p>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='outline-info'>View Github</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xl className='CardContainer'>
              <Card bg='dark' className='TeamCard'>
                <Card.Img variant='top' src={Avatar} />
                <Card.Body>
                  <Card.Title className='CardTitle'>
                    <p>Elinda</p>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
