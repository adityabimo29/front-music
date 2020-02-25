import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import mainlogo from '../assets/img/blog_logo2.png';
import '../App.css';
import LandingPage from '../components/landingPage';
import { isLogin } from '../actions';
import { connect } from 'react-redux';

const MyNavBarX = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  // img HOME ABOUT TEAM GALLERY BLOG CONTACTS
  // tag={Link}
  //                     to='/Register'
  // const flagLogin = false;
  console.log(props);
  return (
    <div>
      <Row>
        <Col lg={12}>
          {props.login.isLogin ? (
            <Navbar
              className='MyNav'
              style={{
                backgroundColor: 'dark',
                height: '129px',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'Poppins, Sans-serif',
                fontSize: '18px',
                fontWeight: 'bold'
              }}
              light
              expand='md'
            >
              <Col lg={{ size: 2, offset: 2 }}>
                <NavbarBrand className='MyNav' href='/contact'>
                  <img
                    src={mainlogo}
                    style={{ width: '100px' }}
                    alt='mylogoku'
                  />
                </NavbarBrand>
              </Col>
              <Col lg={{ size: 8, offset: 1 }}>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className='mr-auto' navbar>
                    <NavItem>
                      <NavLink className='MyNav' tag={Link} to='/about'>
                        ABOUT
                      </NavLink>
                    </NavItem>
                    <NavItem className='MyNav'>
                      <NavLink tag={Link} to='/home'>
                        HOME
                        
                      </NavLink>
                    </NavItem>
                    <NavItem className='MyNav'>
                      <NavLink tag={Link} to='/article'>
                        ARTICLE
                      </NavLink>
                    </NavItem>
                    <NavItem className='MyNav'>
                      <NavLink tag={Link} to='/signin'>
                        LOG IN
                      </NavLink>
                    </NavItem>
                    <NavItem className='MyNav'>
                      <NavLink tag={Link} to='/signup'>
                        SIGN UP
                      </NavLink>
                    </NavItem>
                  </Nav>
                  {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
              </Col>
              <Col lg={2}></Col>
            </Navbar>
          ) : (
            <Navbar
              className='MyNav'
              style={{
                backgrounmapStateToPropsdColor: 'white',
                height: '129px',
                justifyContent: 'center',
                color: 'black',
                fontFamily: 'Poppins, Sans-serif',
                fontSize: '18px',
                fontWeight: 'bold'
              }}
              light
              expand='md'
            >
              <Col lg={{ size: 2, offset: 2 }}>
                <NavbarBrand className='MyNav' href='/contact'>
                  <img
                    src={mainlogo}
                    style={{ width: '100px' }}
                    alt='mylogoku'
                  />
                </NavbarBrand>
              </Col>
              <Col lg={{ size: 8, offset: 1 }}>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className='mr-auto' navbar>
                    <NavItem>
                      <NavLink className='MyNav' tag={Link} to='/about'>
                        ABOUT
                      </NavLink>
                    </NavItem>
                    <NavItem className='MyNav'>
                      <NavLink tag={Link} to='/home'>
                        HOME
                      </NavLink>
                    </NavItem>
                    <NavItem className='MyNav'>
                      <NavLink tag={Link} to='/blog'>
                        BLOG
                      </NavLink>
                    </NavItem>
                    <NavItem className='MyNav'>
                      <NavLink tag={Link} to='/article'>
                        ARTICLE
                      </NavLink>
                    </NavItem>
                    <NavItem className='MyNav'>
                      <NavLink tag={Link} to='/signin'>
                        LOGIN
                      </NavLink>
                    </NavItem>
                    <NavItem className='MyNav'>
                      <NavLink tag={Link} to='/signup'>
                        SIGNUP
                      </NavLink>
                    </NavItem>
                  </Nav>
                  {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
              </Col>
              <Col lg={2}></Col>
            </Navbar>
          )}
        </Col>
      </Row>
    </div>
  );
};
export default MyNavBarX;
