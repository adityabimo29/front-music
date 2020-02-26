import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
// import imageCard1 from '../assets/images/imageCard1.jpeg';
// import imageCard2 from '../assets/images/imageCard2.jpeg';
// import imageCard3 from '../assets/images/imgCardGuitaris1.jpg';
//kanan
import imageCard4 from '../assets/images/imgVocalist.jpeg';
import imageCard5 from '../assets/images/imgvocalist1.jpg';
import imageCard6 from '../assets/images/imgCardVocalist2.jpg';
import { link } from 'react-router-dom';
export default function Testimoni() {
  return (
    <div className='bg-dark'>
      <Row>
        <Col md={12}>
          <p className='p1Contact'>
            Testimonials <br />
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={1}></Col>
        <Col xs={12} md={10}>
          <Carousel>
            <Carousel.Item className='bg-white'>
              <Card>
                <Card.Body style={{ width: '850px' }}>
                  <Card.Img
                    variant='top'
                    style={{
                      borderRadius: '50%',
                      height: '200px',
                      width: '200px',
                      marginLeft: '400px',
                      marginTop: '20px',
                      padding: '15px'
                    }}
                    src={imageCard4}
                  />
                  <Card.Text
                    style={{
                      marginLeft: '30px',
                      textAlign: 'center',
                      fontStyle: 'italic'
                    }}
                  >
                    " i am happy with this application as iam recruiter ,iam
                    easily Find skillful freelance musicians "
                  </Card.Text>
                </Card.Body>
              </Card>
              ;
            </Carousel.Item>

            <Carousel.Item className='bg-white'>
              <Card style={{ width: '850px' }}>
                <Card.Img
                  variant='top'
                  style={{
                    borderRadius: '50%',
                    height: '200px',
                    width: '200px',
                    marginLeft: '400px',
                    marginTop: '20px',
                    padding: '15px'
                  }}
                  src={imageCard5}
                />
                <Card.Body>
                  <Card.Text
                    style={{
                      marginLeft: '30px',
                      textAlign: 'center',
                      fontStyle: 'italic'
                    }}
                  >
                    "Music Byte definitly good application and mediator to me it
                    is have been benefit as indie musicians"
                  </Card.Text>
                </Card.Body>
              </Card>
              ;
            </Carousel.Item>
            <Carousel.Item className='bg-white'>
              <Card style={{ width: '850px' }}>
                <Card.Img
                  variant='top'
                  style={{
                    borderRadius: '50%',
                    height: '200px',
                    width: '200px',
                    marginLeft: '400px',
                    marginTop: '20px',
                    padding: '15px'
                  }}
                  src={imageCard6}
                />
                <Card.Body>
                  <Card.Text
                    style={{
                      marginLeft: '30px',
                      textAlign: 'center',
                      fontStyle: 'italic'
                    }}
                  >
                    "easily to find some one ,colobaration jaming in music,i
                    like it !"
                  </Card.Text>
                </Card.Body>
              </Card>
              ;
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12} md={1}></Col>
      </Row>{' '}
    </div>
  );
}
