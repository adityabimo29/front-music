import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import LandingPage from './components/landingPage';
//import page
import About from './pages/About';
import Article from './pages/Article';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Login';
import Register from './pages/Register';
import MyNavBar from './components/MyNavBar';
function App() {
  return (
    <Router>
      <MyNavBar />

      <Switch>
        <Route exact path='/'>
          {/* path /About yg dibrowser
          isi halaman about yaitu componentnya*/}
          <LandingPage />
        </Route>
        <Route exact path='/about'>
          {/* path /About yg dibrowser
          isi halaman about yaitu componentnya*/}
          <About />
        </Route>
        <Route exact path='/home'>
          {/*isi browser Home tampilkan component :*/}
          <Home />
        </Route>
        <Route exact path='/contact'>
          {/*isi browser Home tampilkan component :*/}
          <Contact />
        </Route>

        <Route exact path='/article'>
          {/*isi browser article (seacrh) tampilkan component :*/}
          <Article />
        </Route>
        <Route exact path='/login'>
          {/*isi browser Login tampilkan component Login*/}
          <Login />
        </Route>
        <Route exact path='/register'>
          {/*isi browser Signup tampilkan component SignUp.js*/}
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
//sebagai catatan jadi di app.js nya itu raeact routernya digunakan
//utk tunjukan nanati di browser kita  link to= /Home --> ini utk di browser app kita
//nah didalam bawahbya link ukt show isi component kita
//nah di navbar itu utk kita swithc ke lik --link yg ada di app.js
//seperti itu jadi link to tidak mengarah ke komponent tapi ke browser
//dan isinya ( component itu yg ditampilkan dibrowser!)
