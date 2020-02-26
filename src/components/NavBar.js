import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
import { Nav, Navbar } from 'react-bootstrap';
import mylogo from '../assets/images/iguitar.png';
import '../App.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Navbar
<<<<<<< HEAD
        bg='dark'
        expand='lg'
=======
        expand='lg'
        bg='dark'
        variant='dark'
>>>>>>> 692d6b04e0b77dc8ce26241eeb417e600fb60cb1
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
<<<<<<< HEAD
            <Nav.Link
              as={Link}
              to='/'
              className='NavHv'
              style={{ color: 'white' }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/about'
              className='NavHv'
              style={{ color: 'white' }}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/contact'
              className='NavHv'
              style={{ color: 'white' }}
            >
              CONTACT
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/main'
              className='NavHv'
              style={{ color: 'white' }}
            >
              MAIN
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/login'
              className='NavHv'
              style={{ color: 'white' }}
            >
              LOGIN
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/register'
              className='NavHv'
              style={{ color: 'white' }}
            >
=======
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
>>>>>>> 692d6b04e0b77dc8ce26241eeb417e600fb60cb1
              REGISTER
            </Nav.Link>
            {/* <Link as={Link} to="/contacts">CONTACTS</Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
