import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import "../../App.css";
import "./aboutme.css";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import file from "../../assets/Devin_Baldwin_-_Resume_-_Software_Engineer.pdf";

class AboutMe extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

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
          {/* ART */}
          <TabPanel className="tabpanel">
            <h2>My Artistic Expression</h2>
            <h4>
              <i>
                <b>
                  In my spare time, I enjoy making 8 bit portraits and
                  animations. I often get a lot of clients who want animations
                  or a portrait, so I'm able to make money off of my expression.
                </b>
              </i>
            </h4>
            <img
              className="art-img"
              src="https://i.imgur.com/VNtliQI.png"
              alt="bond"
            />
            <img
              className="art-img"
              src="https://i.imgur.com/u1mpq35.jpg"
              alt="doom"
            />
            <h4>
              <i>
                <b>
                  I dabble in film, photography and editing. Which in turn,
                  helps me create viral videos, commercials and skits for social
                  media.
                </b>
              </i>
            </h4>
            <img
              className="art-img"
              src="https://media.giphy.com/media/6s2kKF47F9LZEi06RR/giphy.gif"
              alt="random"
            />
            <img
              className="art-img"
              src="https://media.giphy.com/media/5vUN4NKZFq10jQmsPT/giphy.gif"
              alt="powerup"
            />
          </TabPanel>
          {/* MUSIC */}
          <TabPanel className="tabpanel">
            <h2>My Musical Expression</h2>
            <h4>
              <i>
                <b>
                  &nbsp;&nbsp;I've produced music for a multitude of artists.
                  From known to unknown artists, but I prefer to make music for
                  the video games I plan to make in the near future. I come from
                  a musical family.From a very early age, I was indoctrinated
                  into the music industry, but never wanted to take part.
                </b>
              </i>
            </h4>
            <p>(Click below to Check Out my Soundcloud)</p>
            <a href="https://soundcloud.com/itsdevinci">
              <img
                className="art-img"
                src="https://i.imgur.com/93EZMs2.jpg"
                alt="itsdevinci"
              />
            </a>
          </TabPanel>
          {/* SPORTS */}
          <TabPanel className="tabpanel">
            <h2>My Athletic Expression</h2>
            <h4>
              <i>
                <b>
                  &nbsp;&nbsp;I've been an athlete all my life. I can play any
                  sport, but my favorites are basketball and track and field.
                  Challenge me to a race or a game of basketball, I dare you!!!
                </b>
              </i>
            </h4>
            <img
              className="art-img"
              src="https://media.giphy.com/media/3KZldEpdLlXxZkDTBZ/giphy-downsized-large.gif"
              alt="track"
            />
            <img
              className="art-img"
              src="https://media.giphy.com/media/1APg5zja2snvHxDxLA/giphy-downsized-large.gif"
              alt="football"
            />
            <img
              className="art-img"
              src="https://i.imgur.com/txyTjPr.jpg"
              alt="dunk"
            />
          </TabPanel>
          {/* RESUME */}
          <TabPanel className="tabpanel">
            <h2>My Resume</h2>
            <div className="resume">
              <a href={file}>
                <Document
                  className="file"
                  file={file}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} />
                </Document>
              </a>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default AboutMe;
