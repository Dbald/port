import React, { Component } from "react";
import ContactForm from './contactform';
import "./contact.css";

class Contact extends Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="Contact">
        <h1 className="Title">Contact</h1>
        <ContactForm />
				<div className="socialIcons">
					<a href="https://www.linkedin.com/in/devin-baldwin-a7381073/"><img className="icons" src="https://opinahjo.fi/wp-content/uploads/2013/04/LinkedIn.png" /></a>
					<a href="https://www.instagram.com/itsdevinci/"><img className="icons" src="https://i0.wp.com/lilliputadventure.com/wp-content/uploads/2018/06/Instagram-Icon.png?fit=1455%2C1454" /></a>
					<a href="https://www.youtube.com/channel/UCdWMwP8ynch1I0fkgTZUrLw/videos"><img className="icons" src="http://files.softicons.com/download/social-media-icons/ios-7-style-social-media-icons-by-design-bolts/ico/YouTube.ico" /></a>
					<a href="https://github.com/Dbald"><img className="icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png" /></a>
				</div>
			</div>
    );
  }
}

export default Contact;
