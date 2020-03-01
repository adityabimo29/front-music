import React from 'react';
import '../assets/css/Footer.css';
import { Container, Row, Col, Button, Form, FormGroup } from 'react-bootstrap';

function MyFooter() {
  return (
    <div>
      <Container fluid className='Footer'>
        <Row>
          <Col xl>
            <p className='TouchHeader'>GET IN TOUCH</p>
            <p>
              Subscribe to our newsletter to receive weekly news, updates,
              special offers, and exclusive discounts.
            </p>
            <Form className='FooterForm'>
              <FormGroup>
                <input
                  type='email'
                  name='email'
                  placeholder='email@address.com'
                  className='InputEmail'
                />
                <Button variant='outline-info' className='SubscribeButton'>
                  Subscribe Now
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyFooter;
