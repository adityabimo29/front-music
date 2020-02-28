import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyCorousel from '../components/MyCorousel';
import '../App.css';
export default function AboutUs() {
  return (
    <div>
      <Container className='AboutContainer'>
        <Row>
          <Col xl className='AboutTitle'>
            <p>ABOUT US</p>
          </Col>
        </Row>
        <Row>
          <Col xl className='AboutArticle'>
            <p>
              About Our Music Byte Who We Are was founded in 2013 to
              revolutionize indie Band and made comunity guitarist
              ,keyboardist,drummer and music manager or any individuals which
              want to coloborates each others.
            </p>
            <br />
            <p>
              as the our effort become goals we put same samples our individuals
              that already become famous music bands in our country and having
              solid albums that sells more than 100000 copies
            </p>
          </Col>

          <Col xl>
            <MyCorousel />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
