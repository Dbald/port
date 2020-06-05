import React, { Component } from "react";
import "./intro.css";
import "../../App.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="intro-text">
            <h1 id="name">DEVIN BALDWIN</h1>
            <h2 id="title">Web Developer</h2>
            <div className="description">
            <p>
              Web Developer with a focus on HTML/CSS/Javascript/React, and Web
              XR.
              <br/>
                Passionate about crafting new methodology for a better user
                experience.
              <br/>
                An inquisitive and fast learner with a positive and upbeat
                personality.
              <br/>
              Looking to learn, contribute, and grow with a great team.
            </p></div>
              <a href="https://drive.google.com/file/d/1fO7nfIBrG1ou9toO2xJZM_kGSEzDOGV-/view?usp=sharing" target="_blank" rel="noopener noreferrer" alt="resume"><div className="button"><h3>Resume</h3></div></a>
          </div>
          <div className="intro-picture">
            <img
              id="dev-intro"
              // src="https://i.imgur.com/kDWy5sj.png"
              src="https://i.imgur.com/KdcyoSf.png"
              alt="dev"
            />
            <img
              id="dev-suite"
              // src="https://i.imgur.com/kDWy5sj.png"
              src="https://i.imgur.com/mqSGSnE.png"
              alt="dev1"
            />
          </div>
        </div>
        {/* <div id="diagonal-start"></div> */}
        <div className="mid">
          {/* <Projects id="projects" /> */}
        </div>
        {/* <div id="diagonal-end"></div> */}
      </div>
    );
  }
}
