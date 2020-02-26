import React from 'react';
import '../App.css';
import { Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
// import mainlogo from '../asset_indra/img/logo.png';
function MyFooter() {
  return (
    <div className='divFooter'>
      <Row className='MyFooter'>
        <Col lg={{ size: 4 }}>
          {/* <img src={mainlogo} alt='mymainlogo' /> */}
          <p className='pFooter'> OFFICE HOURS </p>
          <p className='p2Footer'>Weekdays: 08:00am - 08:00pm</p>
          <p className='p2Footer'>Weekdays: 08:00am - 08:00pm</p>
        </Col>
        <Col lg={{ size: 4 }}>
          <p
          // style={{
          //   fontWeight: 'bold',
          //   textAlign: 'center',
          //   fontSize: '24px',

          //   fontFamily: 'lato,sanserif'
          // }}
          ></p>
          <div className='divStyleFooter'>
            {/* <content>
                <i class='fas fa-map-marker-alt fa-1x'></i> <br />
                <br />
                <i class='fas fa-phone-square'></i>
                <br />
                <br />
                <i class='far fa-envelope fa-1x'></i> <br />
              </content> */}
            {/* <div>
                Kemang Raya Street 10 , South Jakarta
                <br />
                (+62)21-1234567
                <br /> (+62)21-888-888
                <br />
                ifo@impactbyte.com
                <br />
              </div> */}
          </div>
        </Col>
        <Col lg={{ size: 4 }}>
          <p className='pFooter'>GET IN TOUCH</p>
          <p>
            {' '}
            Subscribe to our newsletter to receive weekly news, updates, special
            offers, and exclusive discounts.
          </p>

          <div className='divSubcribes'>
            <p>
              {' '}
              <Form>
                <FormGroup>
                  <Input
                    className='inputFormFooter'
                    type='email'
                    name='email'
                    id='exampleEmail'
                    placeholder='please put your email'
                  />
                </FormGroup>
              </Form>
            </p>
            <p>
              <Button className='btnFooter'>SUBCSCRIBE</Button>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MyFooter;
