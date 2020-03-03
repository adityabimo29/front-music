import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Support from './pages/Support';
import Profile from './pages/Profile';
import { connect } from 'react-redux';

function App(props) {
  return (
<<<<<<< HEAD
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

<<<<<<< HEAD
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
=======
        <Route exact path='/profile'>
          <Profile />
=======
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
>>>>>>> 6e8aac0093e150bcccf497f1cb446d92dbd2f1b9
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
>>>>>>> 35f3855ab75fbd3f50df822c0c9ea821e683e67b
  );
}

const mapStateToProps = state => {
  console.log(state.users.isLogged);
  return {
    isLogged: state.users.isLogged
  };
};

export default connect(mapStateToProps, null)(App);
