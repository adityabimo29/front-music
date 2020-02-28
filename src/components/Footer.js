import React from 'react';
import '../assets/css/Footer.css';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap';

function MyFooter() {
  return (
    <div>
      <Container className='Footer'>
        <Row>
          <Col xl className='OfficeHours'>
            <p className='OfficeHeader'>OFFICE HOURS</p>
            <p>Weekday : 08.00 AM - 08.00 PM</p>
            <p>Weekend : 10.00 AM - 05.00 PM</p>
          </Col>

          <Col xl>
            <p className='TouchHeader'>GET IN TOUCH</p>
            <p>
              Subscribe to our newsletter to receive weekly news, updates,
              special offers, and exclusive discounts.
            </p>
            <Row>
              <Col xl>
                <Form>
                  <FormGroup>
                    <Input
                      type='email'
                      name='email'
                      id='exampleEmail'
                      placeholder='please put your email'
                    />
                  </FormGroup>
                </Form>
              </Col>
              <Col xl>
                <Button>Subscribe Now</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyFooter;
