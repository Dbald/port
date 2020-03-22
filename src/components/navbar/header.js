import React, { Component } from "react";
import { Link } from "react-router-dom";
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

    return (
      //---------HEADER---------//
      <header className="header-main">
        {/* //-------Navigation Start-----// */}
        <div className="nav">
          <ul className="main-nav">
            <Link to="home">
              <li>
                <b>Home</b>
              </li>
            </Link>
            <Link to="projects">
              <li>
                <b>Projects</b>
              </li>
            </Link>
            <a href="mailto:devincitechsolutions@gmail.com">
              <li>
                <b>Contact</b>
              </li>
            </a>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
