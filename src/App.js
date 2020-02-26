import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
// import HeaderTeam from "./components/HeaderTeam";
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import Blog from './pages/Blog';
import Home from './pages/Home';
import DetailPage from './DetailPages/DetailPage';

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path='/'>
          <Home />
          <Contact />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>

        <Route exact path='/contact'>
          <Contact />
        </Route>

        <Route exact path='/profile'>
          <Profile />
        </Route>

        <Route exact path='/main'>
          <Main />
        </Route>

        <Route exact path='/blog'>
          <Blog />
          <Footer />
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
  );
}

export default App;
