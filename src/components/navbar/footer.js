import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import mail from '../../img/mail-icon.png';
import './navbar.css';

class Footer extends Component {
  render() {
    const logo = require('../../img/header_letter.png');

    return (
      //---------HEADER---------//
      <header className="footer-main">
      {/* //-------Navigation Start-----// */}
      <div className="nav">
        <ul>
            <li>
              <span><b>"Oakland, CA"</b></span>
            </li>
          <Link to='aboutme'>
            <li>
              <a><b>ABOUT</b></a>
            </li>
          </Link>
          <Link to='projects'>
            <li>
              <a><b>PROJECTS</b></a>
            </li>
          </Link>
          <Link to='blog'>
            <li>
              <a><b>BLOG</b></a>
            </li>
          </Link>
          <Link to='contact'>
            <li>
              <a><b>CONTACT</b></a>
            </li>
          </Link>
        </ul>
        <br/>
        <copyright>Devin Baldwin</copyright>
      </div>
      </header>
      );
    }
}

export default Footer;