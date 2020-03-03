import React, { Component } from 'react';
import '../../assets/css/Testimoni.css';
import { Container, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import Image1 from '../../assets/images/image1.jpg';
import Image2 from '../../assets/images/image2.jpg';
import Image3 from '../../assets/images/image3.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Container className='TestiContainer'>
          <h3>Testimonials</h3>
          <Slider {...settings}>
            <Col xl>
              <Col className='TestiList'>
                <img src={Image1} alt='John Mayer' className='TestiImage' />
              </Col>
              <Col className='TestiArticle'>
                <h1>John Mayer</h1>
                <p>" Music Byte is a good place to start your career! "</p>
              </Col>
            </Col>
            <Col xl>
              <Col className='TestiList'>
                <img src={Image2} alt='Tom Misch' className='TestiImage' />
              </Col>
              <Col className='TestiArticle'>
                <h1>Tom Misch</h1>
                <p>
                  " You can always easily find additional member for your band
                  on emergency. Must try! "
                </p>
              </Col>
            </Col>
            <Col xl>
              <Col className='TestiList'>
                <img src={Image3} alt='Calum Scott' className='TestiImage' />
              </Col>
              <Col className='TestiArticle'>
                <h1>Calum Scott</h1>
                <p>" Easy to use. Friendly community. It's flawless! "</p>
              </Col>
            </Col>
          </Slider>
        </Container>
      </div>
    );
  }
}
