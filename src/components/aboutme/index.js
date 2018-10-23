import React, { Component } from "react";
import "../../App.css";
import "./aboutme.css";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <h1 className="Title">About Me</h1>
        <Tabs className="tab-container">
          <TabList className="tablist">
            <Tab className="tab">Art</Tab>
            <Tab className="tab">Music</Tab>
            <Tab className="tab">Sports</Tab>
            <Tab className="tab">Resume</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default AboutMe;
