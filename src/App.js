import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Support from './pages/Support';
import Profile from './pages/Profile';
import Main from './pages/Main';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/login'>
          {props.isLogin ? <Login /> : <Login />}
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/profile/:id'>
          <Profile />
          {/* {props.isLogin ? (<Profile />) : (<Redirect to='/' />)} */}
        </Route>
        <Route exact path='/main'>
          {props.isLogin ? <Main /> : <Redirect to='/' />}
        </Route>
        <Route exact path='/support'>
          <Support />
        </Route>
      </Switch>
    </Router>
  );
}
const mapStateToProps = state => {
  return {
    isLogin: state.users.isLogged
  };
};
export default connect(mapStateToProps)(App);
