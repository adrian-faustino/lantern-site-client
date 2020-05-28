import React from 'react'
import './ContactUs.css'
import axios from 'axios'

// constants
const FORM_ENDPOINT = 'https://formspree.io/mrgypobv';

export default function ContactUs() {

  const formSubmitHandler = e => {
    // add loading animation here later

    e.preventDefault();
    e.persist();
    const firstName = e.target.first_name.value;
    const lastName = e.target.last_name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    
    const data = { firstName, lastName, email, message };

    console.log('Form submitted:', data);
    axios.post(FORM_ENDPOINT, data)
      .then(() => {
        console.log('Email submitted.');
        e.target.reset();
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="main-content">
      <form 
      onSubmit={e => formSubmitHandler(e)}
      className="ContactUs__form-container">
        <div className="ContactUs__names-container">
          <label htmlFor="first_name">First Name</label>
          <label htmlFor="last_name">Last Name</label>

          <input type="text" id="first_name" name="first_name" placeholder="John" required/>
          <input type="text" id="last_name" name="last_name" placeholder="Doe" required/>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="john_doe@example.com" required/>
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter a message..." style={{resize: 'none'}} required/>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}
