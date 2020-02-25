import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
import { Col, Row, Nav, Navbar } from 'react-bootstrap';
import mylogo from '../assets/img/guitar.png';

import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Navbar
        expand='lg'
        bg='dark'
        style={{ color: 'white', paddingTop: '5px' }}
      >
        <Navbar.Brand href='/'>
          <img
            src={mylogo}
            style={{ height: '60px', width: '40px' }}
            className='logoNav'
            alt='Gambar 1'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav
            className='mr-auto ml-auto navFont'
            style={{ color: 'white !important' }}
          >
            <Nav.Link as={Link} to='/' style={{ color: 'white' }}>
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to='/about' style={{ color: 'white' }}>
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to='/contact' style={{ color: 'white' }}>
              CONTACT
            </Nav.Link>
            <Nav.Link as={Link} to='/gallery' style={{ color: 'white' }}>
              GALLERY
            </Nav.Link>
            <Nav.Link as={Link} to='/login' style={{ color: 'white' }}>
              LOGIN
            </Nav.Link>
            <Nav.Link as={Link} to='/register' style={{ color: 'white' }}>
              REGISTER
            </Nav.Link>
            {/* <Link as={Link} to="/contacts">CONTACTS</Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
