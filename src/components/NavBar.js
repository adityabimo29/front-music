import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import mylogo from '../assets/images/iguitar.png';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/users.Actions';
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
    <div style={{ fontFamily: 'Roboto Slab' }}>
      <Navbar bg='dark' expand='lg' style={{ color: 'white' }}>
        {' '}
        <Navbar.Brand>
          <img
            src={mylogo}
            style={{ background: 'none', height: '60px', width: '40px' }}
            className='logoNav'
            alt='Gambar 1'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav
            style={{
              fontFamily: 'Roboto Slab',
              paddingTop: '20px',
              color: 'white !important'
            }}
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
                  to='/main'
                  className='NavHv'
                  style={{ color: 'white' }}
                >
                  MAIN
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