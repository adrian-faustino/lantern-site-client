import React from 'react'

// react-strap
import { Button, Nav, NavItem, NavLink } from 'reactstrap';

// styles
import './NavBar.css';

export default function NavBar() {

  let currentPath = window.location.pathname;

  return (
    <nav className="NavBar__container">

      <div className="NavBar__logo-container">
        <img src="https://picsum.photos/150"/>
      </div>
      
      <h2 className="NavBar__headline">Lighting up the path towards world peace.</h2>

      <hr />

      <Nav vertical>
        <NavItem className={currentPath === '/' ? 'nav-active' : ''}>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem className={currentPath === '/about-us' ? 'nav-active' : ''}>
          <NavLink href="/about-us">About Us</NavLink>
        </NavItem>
        <NavItem className={currentPath === '/photos' ? 'nav-active' : ''}>
          <NavLink href="/photos">Photos</NavLink>
        </NavItem>
        <NavItem className={currentPath === '/future-events' ? 'nav-active' : ''}>
          <NavLink href="/future-events">Future Events</NavLink>
        </NavItem>
        <NavItem className={currentPath === '/contact-us' ? 'nav-active' : ''}>
          <NavLink href="/contact-us">Contact Us</NavLink>
        </NavItem>
        <NavItem>
          <hr />
          <Button className="NavBar__donateBtn" color="info">Donate</Button>
        </NavItem>
      </Nav>
    </nav>
  )
}
