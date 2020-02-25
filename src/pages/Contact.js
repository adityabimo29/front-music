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
import { withRouter } from 'react-router-dom';
export default function Contact() {
  return (
    <div className='myContact'>
      <Row>
        <Col xs={12} md={6}>
          <p
            style={{
              fontSize: '50px',
              color: 'white',
              fontFamily: 'Alfa Slab One',
              marginTop: '20px'
            }}
          >
            Get in Touch <br /> with Us
          </p>
          <p
            style={{
              color: 'green',
              fontSize: '24px',
              fontStyle: 'italic',
              fontFamily:
                'montserrat,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,Arial,sans-serif'
            }}
          >
            Feel free to send us a message to book a table or ask us a question.
          </p>
          <Row>
            <Col style={{ color: '#FF1493' }} xs={{ span: 3, offset: 1 }}>
              <p style={{ textAlign: 'right' }}>
                <i class='fas fa-phone fa-3'></i>
              </p>
              <p style={{ textAlign: 'right' }}>
                <i class='fas fa-location-arrow fa-3'></i>
              </p>
              <p style={{ textAlign: 'right' }}>
                <i class='far fa-envelope fa-3'></i>
              </p>
            </Col>
            <Col style={{ color: 'white' }} xs={8}>
              <p style={{ textAlign: 'left' }}>+1 800 123 1234</p>
              <p style={{ textAlign: 'left' }}>
                652 Main Road, Apt 12 New York, USA
              </p>
              <p style={{ textAlign: 'left' }}>info@demolink.org</p>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <p
            style={{
              color: '#FF1493',
              fontSize: '24px',
              fontStyle: 'italic',
              fontFamily:
                'montserrat,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,Arial,sans-serif'
            }}
          >
            Contact Us :
          </p>
          <Form style={{ background: 'none', borderColor: 'grey' }}>
            <Row style={{ marginTop: '50px' }}>
              <Col xs={6}>
                <Form.Group controlId='formName1'>
                  <Form.Control
                    style={{ background: 'none' }}
                    type='text'
                    placeholder='Your Name'
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group
                  style={{ marginRight: '8px' }}
                  controlId='formName2'
                >
                  <Form.Control
                    style={{ background: 'none' }}
                    type='text'
                    placeholder='Your SureName'
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row style={{ marginTop: '5px' }}>
              <Col xs={6}>
                <Form.Group controlId='formName3'>
                  <Form.Control
                    style={{ background: 'none' }}
                    type='text'
                    placeholder='Your Phone'
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group
                  style={{ marginRight: '8px' }}
                  controlId='formName4'
                >
                  <Form.Control
                    style={{ background: 'none' }}
                    type='email'
                    placeholder='Your Email'
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                <InputGroup>
                  <FormControl
                    as='textarea'
                    placeholder='Write Here'
                    style={{
                      height: '300px',
                      marginRight: '8px',
                      background: 'none'
                    }}
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
