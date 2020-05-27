import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// views
import { AboutUs, ContactUs, FutureEvents, Home, Photos } from './views';

// components
import { Footer, NavBar } from './components';

import './App.css';

function App() {


  return (
    <Router>


      <NavBar />
      

      {/* Switch */}
      <Switch>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/photos">
          <Photos />
        </Route>
        <Route path="/future-events">
          <FutureEvents />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

  
      <Footer />


    </Router>
  );
}

export default App;
