import React from 'react';
import './ContactPage.css';

function ContactPage({ translations}) {
  return (
    <div className="contact">
      <h2>{translations.contactUS}</h2>
      <form className="contact-form">
        <div className="form">
          <label htmlFor="name">{translations.name}</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="form">
          <label htmlFor="email">{translations.email}</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form">
          <label htmlFor="subject">{translations.subject}</label>
          <input type="text" id="subject" name="subject" />
        </div>

        <div className="form">
          <label htmlFor="message">{translations.message}</label>
          <textarea id="message" name="message" rows="6"></textarea>
        </div>

        <button type="submit">{translations.send}</button>
      </form>
    </div>
  );
}

export default ContactPage;
