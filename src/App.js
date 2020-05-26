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
import { Footer } from './components';

// react-strap
import { Button, Nav, NavItem, NavLink } from 'reactstrap';

import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Nav vertical>
          <NavItem>
          <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about-us">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/photos">Photos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/future-events">Future Events</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact-us">Contact Us</NavLink>
          </NavItem>
          <NavItem>
            <Button color="info">Donate</Button>
          </NavItem>
        </Nav>
      </nav>

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
