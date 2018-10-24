import React from 'react';
import "./contact.css";

export default class ContactForm extends React.Component {
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
    alert('Thank you for contacting me! I will get back to you shortly.');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:<br/>
          <input type="text" name="Name" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Email:<br/>
          <input type="text" name="Email" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Company:<br/>
          <input type="text" name="Company" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Reason for contact:<br/>
          <select value={this.state.value} onChange={this.handleChange}>
          <option value="null"></option>
            <option value="employment">Employment</option>
            <option value="general_inquiry">General Inquiry</option>
          </select>
        </label>
        <br/>
        <label>
          Message:<br/>
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <input className="submit" type="submit" value="Submit" />
      </form>
    )
  }
}