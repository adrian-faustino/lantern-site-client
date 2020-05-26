import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// views
import { AboutUs, ContactUs, FutureEvents, Home, Photos } from './views';

import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
          <li>
            <Link to="/future-events">Future Events</Link>
          </li>
          <li>
            <Link to="/contact-us">Users</Link>
          </li>
        </ul>
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
    </Router>
  );
}

export default App;
