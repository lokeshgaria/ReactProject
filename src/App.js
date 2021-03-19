import React from 'react';
import Home from './navbar/Home';
import Services from './navbar/Services';
import Contact from './navbar/Contact';
import About from './navbar/About';
import Footer from './Footer.jsx'; 
import Navbar from './navbar/Navbar.jsx'; 

import { Switch, Route, Redirect } from 'react-router-dom';
const App = () => {
  return (
    <>
     <Navbar  className="navbar"></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/Contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer></Footer>
    </>
  )
}

export default App;