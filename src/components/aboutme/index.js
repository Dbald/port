import React, { Component } from 'react';
import '../../App.css';
import './aboutme.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../navbar/header';
import { Tabs, Tab } from 'react-bootstrap';

class AboutMe extends Component {
    render() {
      return (
            <div className="AboutMe">
              <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Tab 1">
                  Tab 1 content
                </Tab>
                <Tab eventKey={2} title="Tab 2">
                  Tab 2 content
                </Tab>
                <Tab eventKey={3} title="Tab 3" disabled>
                  Tab 3 content
                </Tab>
              </Tabs>;

            </div>
        );
    }
};

export default AboutMe;