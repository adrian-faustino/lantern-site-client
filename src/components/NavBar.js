import React from 'react'

// react-strap
import { Button, Nav, NavItem, NavLink } from 'reactstrap';

// styles
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="NavBar__container">

      <div className="NavBar__logo-container">
        <img src="https://picsum.photos/150"/>
      </div>
      
      <h2 className="NavBar__headline">Our mission statement goes here.</h2>

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
  )
}
