import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/sticker.png";
import "./navbar.css";

class TabBar extends Component {

 

  render() {

    // const aboutSwap = () => {
    //   if (document.getElementsByClassName("about").src === )
    // }

    return (
        <div id="tabbar" className="header header-main">
          <div className="tabicons">
            <NavLink activeClassName="current" className="links" to="/home">
              <img className="logo" src={logo} alt="dts" />
              <p className="undertext">Home</p>
            </NavLink>
          </div>
          <div className="tabs">
            <NavLink activeClassName="current" className="links" to="/aboutme">
              <img
                className="tabicons about"
                src="https://piskel-imgstore-b.appspot.com/img/2a468e8f-a5a8-11e9-8683-75ba66f9cf49.gif"
                // "https://i.imgur.com/3WK2dmv.png"
                // 
                alt="about-icon"
              />
              
              <p className="undertext">About</p>
            </NavLink>
          </div>
          <div className="tabs">
            <NavLink activeClassName="current" className="links" to="/projects">
              <img
                className="tabicons services"
                src="https://piskel-imgstore-b.appspot.com/img/0a7cc028-a5ad-11e9-8c18-75ba66f9cf49.gif"
                // "https://i.imgur.com/VXvoEJm.png"
                // 
                alt="service-icon"
              />
              <p className="undertext">Projects</p>
            </NavLink>
          </div>
          <div className="tabs">
            <NavLink activeClassName="current" className="links" to="/blog">
              <img
                className="tabicons media"
                src="https://piskel-imgstore-b.appspot.com/img/7bd6bf02-a5b5-11e9-bdce-75ba66f9cf49.gif"
                // "https://i.imgur.com/Xe2Pv72.png"
                // 
                alt="media-icon"
              />
              <p className="undertext">Blog</p>
            </NavLink>
          </div>
          <div className="tabs">
            <a href="mailto:devincitechsolutions@gmail.com">
              <img
                className="tabicons contact"
                src="https://piskel-imgstore-b.appspot.com/img/6ea37e5e-a5a6-11e9-8ab6-75ba66f9cf49.gif"
                // "https://i.imgur.com/oksKhDE.png"
                // 
                alt="contact-icon"
              />
              <p className="undertext">Contact</p>
              </a>
          </div>
        </div>
    );
  }
}
export default TabBar;
