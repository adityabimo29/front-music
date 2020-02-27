import React, { Fragment } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import img1Team from '../assets/images/imgvocalist1.jpg';
import '../App.css';
export default function MeetTeam() {
  return (
    <Fragment>
      <Row>
        <Col xs={12} md={12}>
          <p
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: '34px',
              fontStyle: 'italic',
              fontFamily: 'Alfa Slab One'
            }}
          >
            MEET OUR TEAM
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={3} xs={12}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Img
                className='divxAgon'
                // style={{
                //   clipPath: `polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`
                // }}
                variant='top'
                src={img1Team}
              />
              <Card.Title>Justin Bieber</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xs={12}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Img
                className='divxAgon'
                // style={{
                //   clipPath: `polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`
                // }}
                variant='top'
                src={img1Team}
              />
              <Card.Title>Taylor Swift</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xs={12}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Img
                className='divxAgon'
                // style={{
                //   clipPath: `polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`
                // }}
                variant='top'
                src={img1Team}
              />
              <Card.Title>Jhon Mayer</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xs={12}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Img
                className='divxAgon'
                // style={{
                //   clipPath: `polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`
                // }}
                variant='top'
                src={img1Team}
              />
              <Card.Title>Abigail Zachko</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
//  // clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
