import React from 'react';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import MyNavBarBootStrap from './components/MyNavBarBootStrap';

function App() {
  return (
    <div className='App'>
      <MyNavBarBootStrap />
      <Home />
      <Contact />
      <About />
    </div>
  );
}

export default App;
