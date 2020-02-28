import React, { Fragment } from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
// import HeaderTeam from "./components/HeaderTeam";
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './pages/Blog';
import Home from './pages/Home';
import DetailPage from './DetailPages/DetailPage';
import Profile from './pages/Profile';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div>
      <Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/main'>
              {props.isLogged === false ? <Redirect to='/login' /> : <About />}
            </Route>

            <Route exact path='/contact'>
              <Contact />
            </Route>

            <Route exact path='/profile'>
              {props.isLogged === false ? (
                <Redirect to='/login' />
              ) : (
                <Profile />
              )}
            </Route>

            <Route exact path='/blog'>
              <Blog />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/register'>
              <Register />
            </Route>
            <Route path='/detailPage/:id'>
              <DetailPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Fragment>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state.users.isLogged);
  return {
    isLogged: state.users.isLogged
  };
};

export default connect(mapStateToProps, null)(App);
