import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Support from './pages/Support';
import Profile from './pages/Profile';
import Main from './pages/Main';

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
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/main'>
          <Main />
        </Route>
        <Route exact path='/support'>
          <Support />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
