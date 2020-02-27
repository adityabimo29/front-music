import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
import { Nav, Navbar } from 'react-bootstrap';
import mylogo from '../assets/images/iguitar.png';
import '../App.css';
import { Link } from 'react-router-dom';
// import { isLogged } from '../actions';
import { connect } from 'react-redux';
import { logout } from '../actions/users.Actions';
// import { isLogged } from '../reducers/users.Reducers';
import { withRouter } from 'react-router';
const NavBar = props => {
  // console.log(props);
  const handleLogout = () => {
    localStorage.clear();
    props.logout();
    props.history.push('/login');
    window.location.reload();
  };

  return (
    <div>
      <Navbar
        bg='dark'
        expand='lg'
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
            <Nav.Link
              as={Link}
              to='/'
              className='NavHv'
              style={{ color: 'white' }}
            >
              HOME
            </Nav.Link>
            {props.isLogged ? (
              <Fragment>
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
                  to='/profile'
                  className='NavHv'
                  style={{ color: 'white' }}
                >
                  PROFILE
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
                  className='NavHv'
                  style={{ color: 'white' }}
                  onClick={handleLogout}
                >
                  LOGOUT
                </Nav.Link>
              </Fragment>
            ) : (
              <Fragment>
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
                  REGISTER
                </Nav.Link>
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
//mohon navbarnya dipakai ya  sudah benar logicnya
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
