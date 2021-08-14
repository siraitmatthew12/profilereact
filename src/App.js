import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Hero from './components/HeroSection';
import About from './components/About'
import Certification from './components/Certification'
import Contact from './components/Contact'



function App() {
  return (
    <>
    <Router>
        <Navbar />
          <Switch>
            <Route path='./components/HeroSection' exact component={Hero}/>
            <Route path='/mainabout' exact component={About}/>
            <Route path='/maincertification' exact component={Certification}/>
            <Route path='/maincontact' exact component={Contact}/>
          </Switch>
    
    <Hero />
    <About/>
    <Certification/>
    <Contact/>
    </Router>
    </>
  );
}

export default App;
