import React, { Component } from 'react';
import '../assets/css/Main.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
// import Logo from '../assets/images/logo.png';
import pic1 from '../assets/images/01.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';

export default class Main extends Component {
  render() {
    const params = {
      // Provide Swiper class as props
      Swiper,
      // Add modules you need
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    };
    return (
      <div>
        <Container className='MainContainer'>
          <Row>
            <ReactIdSwiperCustom {...params}>
              <Col xl>
                <Card className='Cards'>
                  <Card.Img variant='top' src={pic1} />
                  <Card.Body>
                    <Card.Title>John Snow</Card.Title>
                    <Card.Text>
                      Rock
                      <br />
                      Guitarist
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl>
                <Card className='Cards'>
                  <Card.Img variant='top' src={pic2} />
                  <Card.Body>
                    <Card.Title>Ygritte</Card.Title>
                    <Card.Text>
                      Jazz
                      <br />
                      Singer
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl>
                <Card className='Cards'>
                  <Card.Img variant='top' src={pic3} />
                  <Card.Body>
                    <Card.Title>Arya Stark</Card.Title>
                    <Card.Text>
                      Rock
                      <br />
                      Bassist
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </ReactIdSwiperCustom>
          </Row>
          <Row>
            <Col className='ButtonContainer'>
              <button>
                <i class='fa fa-thumbs-o-up fa-3x' aria-hidden='true'></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
