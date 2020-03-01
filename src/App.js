import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
// import HeaderTeam from "./components/HeaderTeam";
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './pages/Blog';
import Home from './pages/Home';
import DetailPage from './DetailPages/DetailPage';
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

        <Route exact path='/main'>
          <Main />
        </Route>

        <Route exact path='/profile'>
          <Profile />
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
    </Router>
  );
}

export default App;
