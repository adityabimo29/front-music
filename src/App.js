import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
// import HeaderTeam from "./components/HeaderTeam";
import About from './pages/About';
// import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
// import DetailPage from './DetailPages/DetailPage';
import Profilex from './pages/Profilex';
// import AllProfile from './pages/AllProfile';

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

        <Route exact path='/main'>
          <Main />
        </Route>

        {/* <Route exact path='/profile'>
          <Profile />
        </Route> */}
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
