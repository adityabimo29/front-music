import React, { Component } from 'react';
import image1 from '../assets/images/icorousel1.jpeg';
import image2 from '../assets/images/icorousel2.jpeg';
import image3 from '../assets/images/icorousel3.jpeg';
import image4 from '../assets/images/icorousel4.jpeg';
import { Carousel } from 'react-bootstrap';
export class MyCorousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: '355px' }}
            className='d-block w-100'
            src={image1}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '355px' }}
            className='d-block w-100'
            src={image2}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '275px' }}
            className='d-block w-100'
            src={image3}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '275px' }}
            className='d-block w-100'
            src={image4}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default MyCorousel;
