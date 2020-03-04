import React, { Fragment } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../assets/css/Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/users.Actions';
import { withRouter } from 'react-router';
import Logo from '../assets/images/logo.png';

const Header = props => {
  const handleLogout = () => {
    localStorage.clear();
    props.logout();
    props.history.push('/login');
    window.location.reload();
  };

  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
        <Navbar.Brand>
          <img src={Logo} className='HeaderLogo' alt='Music Byte' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/' className='HeaderLink'>
              Home
            </Nav.Link>
            {props.isLogged ? (
              <Fragment>
                <Nav.Link as={Link} to='/about' className='HeaderLink'>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to='/oneprofile' className='HeaderLink'>
                  Profile
                </Nav.Link>
                <Nav.Link as={Link} to='/contact' className='HeaderLink'>
                  Contact
                </Nav.Link>
                <Nav.Link onClick={handleLogout} className='HeaderLink'>
                  Logout
                </Nav.Link>
              </Fragment>
            ) : (
              <Fragment>
                <Nav.Link as={Link} to='/about' className='HeaderLink'>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to='/contact' className='HeaderLink'>
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to='/login' className='HeaderLink'>
                  Sign In
                </Nav.Link>
                <Nav.Link as={Link} to='/register' className='HeaderLink'>
                  Sign Up
                </Nav.Link>
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLogged: state.users.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
