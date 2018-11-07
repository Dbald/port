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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const name = e.target.value;
    this.setState({ name: name });
    const email = e.target.value;
    this.setState({ email: email });
    const company = e.target.value;
    this.setState({ company: company });
    const subject = e.target.value;
    this.setState({ subject: subject });
    const message = e.target.value;
    this.setState({ message: message });
  }
  resetForm() {
    document.getElementById("contact-form").reset();
  }
  handleSubmit(e) {
    e.preventDefault();

    const { name, email, company, subject, message } = this.state;
    // console.log(
    //   `${name}`,
    //   `${email}`,
    //   `${company}`,
    //   `${subject}`,
    //   `${message}`
    //   );

    axios({
      method: "post",
      url: "http://localhost:5000/send",
      data: {
        name: name,
        email: email,
        company: company,
        subject: subject,
        message: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  render() {
    return (
      <form
        id="contact-form"
        onSubmit={this.handleSubmit}
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Reason for contact:
          <br />
          <select
            name="subject"
            value={this.state.value}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input className="submit" type="submit" value="Submit" />
      </form>
    );
  }
}
