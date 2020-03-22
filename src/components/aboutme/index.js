import React, { Component } from "react";
import "../../App.css";
import "./aboutme.css";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <h1 className="Title">Bio</h1>
        <div id="diagonal-start"></div>
        <div id="mid"></div>
        <div id="diagonal-end"></div>
      </div>
    );
  }
}

export default AboutMe;
