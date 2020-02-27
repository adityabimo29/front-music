import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import MyCorousel from '../components/MyCorousel';
import '../App.css';
export default function AboutUs() {
  return (
    <Fragment className='MyAbout'>
      <Row>
        <Col>
          <p className='Judul'> ABOUT US</p>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            backgroundColor: '#263238',
            color: 'white',
            fontSize: '20px'
          }}
          md={6}
        >
          <p
            style={{
              padding: '10px',
              margin: '28px',
              fontFamily: 'Robot'
            }}
          >
            About Our Music Byte Who We Are was founded in 2013 to revolutionize
            indie Band and made comunity guitarist ,keyboardist,drummer and
            music manager or any individuals which want to coloborates each
            others.
          </p>
          <br />
          <p
            style={{
              padding: '10px',
              margin: '28px',
              fontFamily: 'Robot'
            }}
          >
            as the our effort become goals we put same samples our individuals
            that already become famous music bands in our country and having
            solid albums that sells more than 100000 copies
          </p>
        </Col>

        <Col md={6}>
          {/*corousel */}
          <MyCorousel />
        </Col>
      </Row>
    </Fragment>
  );
}
