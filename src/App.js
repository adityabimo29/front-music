import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Support from './pages/Support';
import Profilex from './pages/Profilex';
import Main from './pages/Main';
// import ProfileById from './pages/ProfileById';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>

        <Route exact path='/oneprofile'>
          <Profilex />
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
