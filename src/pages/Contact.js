import React from 'react';
import '../App.css';
import {
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl
} from 'react-bootstrap';

export default function Contact() {
  return (
    <div className='myContact'>
      <Row>
        <Col xs={12} md={6}>
          <p className='p1Contact'>
            Get in Touch <br /> with Us
          </p>
          <p className='p2Contact'>
            Feel free to send us a message <br />
            to book a table or ask us a question.
          </p>
          <Row>
            <Col className='p2styleColor' xs={{ span: 3, offset: 1 }}>
              <p className='pAlignContact'>
                <i className='fas fa-phone fa-3'></i>
              </p>
              <p className='pAlignContact'>
                <i className='fas fa-location-arrow fa-3'></i>
              </p>
              <p className='pAlignContact'>
                <i className='far fa-envelope fa-3'></i>
              </p>
            </Col>
            <Col className='pColor' xs={8}>
              <p className='pAlignment'>+62 21 1234567</p>
              <p className='pAlignment'>
                Impact Byte at Go Works Office ,<br />
                Kemang Raya 10,South Jakarta
              </p>
              <p className='pAlignment'>info@impactbyte.com</p>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <p className='pContactUs'>Contact Us :</p>
          <Form className='bgContactUs'>
            <Row style={{ marginTop: '50px' }}>
              <Col xs={6}>
                <Form.Group controlId='formName1'>
                  <Form.Control
                    className='bgContactUs'
                    type='text'
                    placeholder='Your Name'
                    style={{ background: 'none' }}
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group
                  style={{ marginRight: '8px' }}
                  controlId='formName2'
                >
                  <Form.Control
                    className='bgContactUs'
                    type='text'
                    placeholder='Your SureName'
                    style={{ background: 'none' }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row style={{ marginTop: '5px' }}>
              <Col xs={6}>
                <Form.Group controlId='formName3'>
                  <Form.Control
                    className='bgContactUs'
                    type='text'
                    placeholder='Your Phone'
                    style={{ background: 'none' }}
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group
                  style={{ marginRight: '8px' }}
                  controlId='formName4'
                >
                  <Form.Control
                    className='bgContactUs'
                    type='email'
                    placeholder='Your Email'
                    style={{ background: 'none' }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row style={{ paddingBottom: '20px' }}>
              <Col xs={12}>
                <InputGroup>
                  <FormControl
                    as='textarea'
                    placeholder='Write Here'
                    style={{ background: 'none' }}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={9}> </Col>
              <Col md={{ span: 1, offset: 1 }}>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
//'montserrat,-apple-system','BlinkMacSystemFont','segoe ui';'Roboto','Arial,sans-serif;
