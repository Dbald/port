import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./navbar.css";

class Header extends Component {
  state = {
    isTop: true
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    const logo = require("../../img/header_letter.png");

    return (
      //---------HEADER---------//
      <header className="header-main">
        <Link to="home">
          <a className="logo-holder">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </Link>
        {/* //-------Navigation Start-----// */}
        <div className="nav">
          <ul className="main-nav">
            <Link to="aboutme">
              <li>
                <b>ABOUT</b>
              </li>
            </Link>
            <Link to="projects">
              <li>
                <b>PROJECTS</b>
              </li>
            </Link>
            <Link to="blog">
              <li>
                <b>BLOG</b>
              </li>
            </Link>
            <a href="mailto:devincitechsolutions@gmail.com">
              <li>
                <b>CONTACT</b>
              </li>
            </a>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
