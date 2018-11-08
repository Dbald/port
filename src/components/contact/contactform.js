import React from "react";
import axios from "axios";
import "./contact.css";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    };
  }
  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value});
  }
  resetForm() {
    document.getElementById("contact-form").reset();
  }

  addForm = () => {
    const { name, email, company, subject, message } = this.state

    const foo = {  name: name,
      email: email,
      company: company,
      subject: subject,
      message: message};
     axios
     .post(`http://localhost:5000/send`, foo)
    .then(savedData => {
      console.log(savedData);
    })
    .catch(error => {
       console.log(error);
   });
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.addForm;
  }

  render() {
    return (
      <form
        id="contact-form"
        onSubmit={this.addForm}
        action="http://localhost:5000/send"
        method="post"
      >
        <label>
          Name:
          <br />
          <input
            type="text"
            name="name"
            value={this.state.value}
            onChange={this.handleTextInput}
          />
        </label>
        <br />
        <label>
          Email:
          <br />
          <input
            type="text"
            name="email"
            value={this.state.value}
            onChange={this.handleTextInput}
          />
        </label>
        <br />
        <label>
          Company:
          <br />
          <input
            type="text"
            name="company"
            value={this.state.value}
            onChange={this.handleTextInput}
          />
        </label>
        <br />
        <label>
          Reason for contact:
          <br />
          <select
            name="subject"
            value={this.state.value}
            onChange={this.handleTextInput}
          >
            <option value="null" />
            <option value="employment">Employment</option>
            <option value="general_inquiry">General Inquiry</option>
          </select>
        </label>
        <br />
        <label>
          Message:
          <br />
          <textarea
            name="message"
            value={this.state.value}
            onChange={this.handleTextInput}
          />
        </label>
        <br />
        <input className="submit" type="submit" value="Submit" />
      </form>
    );
  }
}
