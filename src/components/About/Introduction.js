import React, { Component } from 'react';
import '../../assets/css/Introduction.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import First from '../../assets/images/icorousel1.jpeg';
import Second from '../../assets/images/icorousel2.jpeg';
import Third from '../../assets/images/icorousel3.jpeg';

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <Container fluid className='IntroductionContainer'>
          <Row>
            <Col xl>
              <h3>What is Music Byte?</h3>
              <p>
                Inspired by Kaskus, the most largest Indonesia internet forum.
                Back in the day, when you want to find a new member for your
                existing band or want to recruit people to create a band, you
                need to join the forum first, open a thread then wait until
                someone approach your post, after that you need to exchange
                number and meet up in real life. It was troublesome because
                there's no guarantee that person is going to join your band
                after the meet up or his skill may not like your expectations.
                It will waste a lot of time, money and energy.
              </p>
              <p>
                Based on that reason, we created this web application where you
                can join and meet other musicians. No need to meet up in real
                life to talk about 'things' and waste your time. Here you can
                get all the information you need to decide if you want to
                recruit that person or join his band. The time you meet that
                person, you'll already practicing together in a band.
              </p>
            </Col>
            <Col xl>
              <Carousel>
                <Carousel.Item>
                  <img
                    className='d-block w-100 Slides'
                    src={First}
                    alt='First slide'
                  />
                  <Carousel.Caption>
                    <h5>First slide label</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100 Slides'
                    src={Second}
                    alt='Third slide'
                  />
                  <Carousel.Caption>
                    <h5>Second slide label</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100 Slides'
                    src={Third}
                    alt='Third slide'
                  />

                  <Carousel.Caption>
                    <h5>Third slide label</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
