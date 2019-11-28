import React, { Component } from "react";
import file from '../../assets/resume.pdf';
import "./navbar.css";

export default class Footer extends Component {
  render() {
    const logo = require("../../img/header_letter.png");
    return (
      //---------HEADER---------//
      <header className="footer-main">
        {/* //-------Navigation Start-----// */}
        <div>
          <ul className="footer-nav">
            <li>
              <h2>Let's get social!</h2>
            </li>
          </ul>
          <div className="socialIcons">
            <a href={file} target="_blank" rel="resume">
              <img
                id="left"
                alt="doc"
                className="icons"
                src="https://mbtskoudsalg.com/images/resume-icon-png-4.png"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/devin-baldwin-a7381073/"
              target="_blank"
            >
              <img
                className="icons"
                src="https://opinahjo.fi/wp-content/uploads/2013/04/LinkedIn.png"
              />
            </a>
            <a href="https://www.instagram.com/itsdevinci/" target="_blank">
              <img
                className="icons"
                src="https://i0.wp.com/lilliputadventure.com/wp-content/uploads/2018/06/Instagram-Icon.png?fit=1455%2C1454"
              />
            </a>

            <a
              href="https://www.youtube.com/channel/UCdWMwP8ynch1I0fkgTZUrLw/videos"
              target="_blank"
            >
              <img
                className="icons"
                src="https://upload.wikimedia.org/wikipedia/commons/4/40/Youtube_icon.svg"
              />
            </a>
            <a href="https://github.com/Dbald" target="_blank">
              <img
                className="icons"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png"
              />
            </a>
          </div>
          <ul className="footer-nav">
            <li>
              <p>Devin Baldwin, 2018 All Rights Reserved</p>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
