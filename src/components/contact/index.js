import React, { Component } from "react";
import ContactForm from './contactform';
import "./contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="inner-contact">
        <h1 className="Title">Contact</h1>
        <ContactForm />
			</div>
      </div>
    );
  }
}

export default Contact;
