import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="Footer__container">
      
      <section className="Footer__follow-container">
        <h3 className="Footer__follow-headline">Follow us on:</h3>

        <ul className="Footer__followBtns-container">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </section>

      <hr />
      <p>contact.adrianfaustino@gmail.com</p>
      
    </footer>
  )
}
