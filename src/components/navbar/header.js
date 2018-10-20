import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import './navbar.css';

class Header extends Component {
  render() {
    const logo = require('../../img/header_letter.png');

    return (
      //---------HEADER---------//
      <header className="header-main">
        <Link to='home'>
        <a className="logo-holder"><img className='logo' src={logo}/></a>
        </Link>
      {/* //-------Navigation Start-----// */}
      <div className="nav">
        <ul>
          <Link to='home'>
            <li>
              <a><b>HOME</b></a>
            </li>
          </Link>
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
      </div>
      </header>
      );
    }
}

export default Header;