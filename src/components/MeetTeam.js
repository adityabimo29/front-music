import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import img1Team from '../assets/images/JhonMayer.jpeg';
import img2Team from '../assets/images/Santana.jpeg';
import img3Team from '../assets/images/TaylorSwift.jpeg';
import img4Team from '../assets/images/JoeSatriani.jpeg';
import '../assets/css/Team.css';
export default function MeetTeam() {
  return (
    <div style={{ minHeight: '100vh' }}>
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Col md={3} xs={12}>
              {/*akhir */}
              <div class='flipBox'>
                <div class='flipBoxInner'>
                  <div class='flipBoxFront'>
                    {/* awal  */}
                    <Card style={{ marginLeft: '20px', width: '18rem' }}>
                      <Card.Body>
                        <Card.Img
                          style={{ width: '150px', height: '200px' }}
                          className='divxAgon'
                          variant='top'
                          src={img1Team}
                        />

                        <Card.Title>Jhon Mayer</Card.Title>
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
                    <Card style={{ marginLeft: '20px', width: '18rem' }}>
                      <Card.Body>
                        <Card.Img
                          style={{ width: '150px', height: '200px' }}
                          className='divxAgon'
                          variant='top'
                          src={img1Team}
                        />

                        <Card.Title>Jhon Mayer</Card.Title>
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

            {/*end 1*/}
            {/* start2*/}
            <Col md={3} xs={12}>
              <div class='flipBox'>
                <div class='flipBoxInner'>
                  <div class='flipBoxFront'>
                    {/* awal  */}
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Img
                          style={{ width: '150px', height: '200px' }}
                          className='divxAgon'
                          variant='top'
                          src={img2Team}
                        />

                        <Card.Title>Santana</Card.Title>
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
                          style={{ width: '150px', height: '200px' }}
                          className='divxAgon'
                          variant='top'
                          src={img2Team}
                        />

                        <Card.Title>Santana</Card.Title>
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
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Img
                          style={{ width: '150px', height: '200px' }}
                          className='divxAgon'
                          variant='top'
                          src={img3Team}
                        />

                        <Card.Title>Taylor Swift</Card.Title>
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
                          style={{ width: '150px', height: '200px' }}
                          className='divxAgon'
                          variant='top'
                          src={img3Team}
                        />

                        <Card.Title>Taylor Swift</Card.Title>
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
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Img
                          style={{ width: '150px', height: '200px' }}
                          className='divxAgon'
                          variant='top'
                          src={img4Team}
                        />

                        <Card.Title>JoeSatriani</Card.Title>
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
                          style={{ width: '150px', height: '200px' }}
                          className='divxAgon'
                          variant='top'
                          src={img4Team}
                        />

                        <Card.Title>Joe Satriani</Card.Title>
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
          </div>
        </Row>
      </Container>
    </div>
  );
}
