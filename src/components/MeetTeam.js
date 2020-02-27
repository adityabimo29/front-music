import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import img1Team from '../assets/images/imgvocalist1.jpg';
import '../assets/css/Team.css';
export default function MeetTeam() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={12}>
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'Roboto Slab',
              fontSize: '3rem',
              color: 'white'
            }}
          >
            <h1>MEET OUR TEAM</h1>
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={3} xs={12}>
          {/*akhir */}
          <div class='flipBox'>
            <div class='flipBoxInner'>
              <div class='flipBoxFront'>
                {/* awal  */}
                <Card style={{ paddingLeft: '10px', width: '18rem' }}>
                  <Card.Body>
                    <Card.Img
                      className='divxAgon'
                      variant='top'
                      src={img1Team}
                    />

                    <Card.Title>Justin Bieber</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant='primary'>Go somewhere</Button> */}
                  </Card.Body>
                </Card>
                {/*akhir */}
              </div>
              <div class='flipBoxBack'>
                {/* awal  */}
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Img
                      className='divxAgon'
                      variant='top'
                      src={img1Team}
                    />

                    <Card.Title>Justin Bieber</Card.Title>
                    <Card.Text>Keep In Touch :</Card.Text>
                    <div
                      xs={12}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div className='MyCol3'>
                        <i class='fab fa-facebook fa-2x'></i>
                      </div>
                      <div className='MyCol2'>
                        <i class='fab fa-instagram-square fa-2x'></i>
                      </div>

                      <div className='MyCol'>
                        <i class='fab fa-linkedin fa-2x'></i>
                      </div>
                      <div className='MyCol4'>
                        <i class='fab fa-twitter fa-2x'></i>
                      </div>
                    </div>
                    {/* <Button variant='primary'>Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          ;
        </Col>

        {/*end 1*/}
        {/* start2*/}
        <Col md={3} xs={12}>
          <div class='flipBox'>
            <div class='flipBoxInner'>
              <div class='flipBoxFront'>
                {/* awal  */}
                <Card style={{ paddingLeft: '10px', width: '18rem' }}>
                  <Card.Body>
                    <Card.Img
                      className='divxAgon'
                      variant='top'
                      src={img1Team}
                    />

                    <Card.Title>Justin Bieber</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant='primary'>Go somewhere</Button> */}
                  </Card.Body>
                </Card>
                {/*akhir */}
              </div>
              <div class='flipBoxBack'>
                {/* awal  */}
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Img
                      className='divxAgon'
                      variant='top'
                      src={img1Team}
                    />

                    <Card.Title>Justin Bieber</Card.Title>
                    <Card.Text>Keep In Touch :</Card.Text>
                    <div
                      xs={12}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div className='MyCol3'>
                        <i class='fab fa-facebook fa-2x'></i>
                      </div>
                      <div className='MyCol2'>
                        <i class='fab fa-instagram-square fa-2x'></i>
                      </div>

                      <div className='MyCol'>
                        <i class='fab fa-linkedin fa-2x'></i>
                      </div>
                      <div className='MyCol4'>
                        <i class='fab fa-twitter fa-2x'></i>
                      </div>
                    </div>
                    {/* <Button variant='primary'>Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Col>
        {/* end 2*/}
        {/* start3*/}
        <Col md={3} xs={12}>
          <div class='flipBox'>
            <div class='flipBoxInner'>
              <div class='flipBoxFront'>
                {/* awal  */}
                <Card style={{ paddingLeft: '10px', width: '18rem' }}>
                  <Card.Body>
                    <Card.Img
                      className='divxAgon'
                      variant='top'
                      src={img1Team}
                    />

                    <Card.Title>Justin Bieber</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant='primary'>Go somewhere</Button> */}
                  </Card.Body>
                </Card>
                {/*akhir */}
              </div>
              <div class='flipBoxBack'>
                {/* awal  */}
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Img
                      className='divxAgon'
                      variant='top'
                      src={img1Team}
                    />

                    <Card.Title>Justin Bieber</Card.Title>
                    <Card.Text>Keep In Touch :</Card.Text>
                    <div
                      xs={12}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div className='MyCol3'>
                        <i class='fab fa-facebook fa-2x'></i>
                      </div>
                      <div className='MyCol2'>
                        <i class='fab fa-instagram-square fa-2x'></i>
                      </div>

                      <div className='MyCol'>
                        <i class='fab fa-linkedin fa-2x'></i>
                      </div>
                      <div className='MyCol4'>
                        <i class='fab fa-twitter fa-2x'></i>
                      </div>
                    </div>
                    {/* <Button variant='primary'>Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Col>
        {/* end3*/}
        {/* start4*/}
        <Col md={3} xs={12}>
          <div class='flipBox'>
            <div class='flipBoxInner'>
              <div class='flipBoxFront'>
                {/* awal  */}
                <Card style={{ paddingLeft: '10px', width: '18rem' }}>
                  <Card.Body>
                    <Card.Img
                      className='divxAgon'
                      variant='top'
                      src={img1Team}
                    />

                    <Card.Title>Justin Bieber</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant='primary'>Go somewhere</Button> */}
                  </Card.Body>
                </Card>
                {/*akhir */}
              </div>
              <div class='flipBoxBack'>
                {/* awal  */}
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Img
                      className='divxAgon'
                      variant='top'
                      src={img1Team}
                    />

                    <Card.Title>Justin Bieber</Card.Title>
                    <Card.Text>Keep In Touch :</Card.Text>
                    <div
                      xs={12}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div className='MyCol3'>
                        <i class='fab fa-facebook fa-2x'></i>
                      </div>
                      <div className='MyCol2'>
                        <i class='fab fa-instagram-square fa-2x'></i>
                      </div>

                      <div className='MyCol'>
                        <i class='fab fa-linkedin fa-2x'></i>
                      </div>
                      <div className='MyCol4'>
                        <i class='fab fa-twitter fa-2x'></i>
                      </div>
                    </div>
                    {/* <Button variant='primary'>Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Col>
        {/* end4*/}
      </Row>
    </Container>
  );
}
