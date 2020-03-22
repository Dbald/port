import React, { Component } from "react";
import "./projects.css";
// import Carousel from "nuka-carousel";
import Front1 from "../../img/p1_front.png";
import Front2 from "../../img/p2_front.png";
import Front3 from "../../img/p3_front.png";
import Run from "../../img/runvinci.gif";

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <h1 className="Title">Projects</h1>
        <div className="carousel">
        {/* Project #1 */}
        <div className="project-slides">
              <h2 className="slide-title">Why Note?</h2>
              <div className="main-project-slides">
                <img
                  src="https://i.imgur.com/KvQpJyb.png"
                  alt="slide"
                  className="slides"
                  title="Why Note?"
                />
                <div className="description-holder">
                  <div className="slide-description">
                    Simple react web application that allows users to create and view notes<br />
                    <br />
                    Tech: React and Netlify.{" "}
                  </div>
                  <img id="resize"
                    alt="slide"
                    src="https://i.imgur.com/r3wmFsj.png"

                    className="gifs"
                  />
                </div>
              </div>
              <div className="button-holder">
                <button className="slide-buttons">
                  <a href="https://practical-neumann-25384b.netlify.com" target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
                <button className="slide-buttons">
                  <a
                    href="https://github.com/Dbald/front-end-project-week"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </button>
              </div>
              <br />
            </div>
            {/* Project #2 */}
            <div className="project-slides">
              <h2 className="slide-title">Give Me My Money</h2>
              <div className="main-project-slides">
                <img
                  src={Front1}
                  alt="slide"
                  className="slides"
                  title="Give Me My Money"
                />
                <div className="description-holder">
                  <div className="slide-description">
                    GiveMeMyMoney is a subscription-based application that
                    allows "Admins" to upload invoices, and set automatic
                    email/sms messages to be sent to their "Client". <br />
                    <br />
                    Tech: React, Redux, React-Native, Node, Express, MongoDB,
                    Heroku, mLab.{" "}
                  </div>
                  <img
                    alt="slide"
                    src="https://media.giphy.com/media/1yLDR0Adi9mg07cltO/giphy.gif"
                   
                    className="gifs"
                  />
                </div>
              </div>
              <div className="button-holder">
                <button className="slide-buttons">
                  <a href="https://www.givememymoney.app/" target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
                <button className="slide-buttons">
                  <a
                    href="https://github.com/Dbald/giveMEmyMONEY"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </button>
              </div>
              <br />
            </div>
            {/* Project #3 */}
            <div className="project-slides">
              <h2 className="slide-title">The Devinci Code</h2>
              <div className="main-project-slides">
                <img
                  alt="slide"
                  src={Front2}
                  className="slides"
                  title="The Devinci Code"
                />
                <div className="description-holder">
                  <div className="slide-description">
                    The Devinci Code is an React-Native app that is in
                    development for my podcast and YouTube channel. <br />
                    <br />
                    Tech: React, React-Native, Node, Express{" "}
                  </div>
                  <img
                    alt="slide"
                    src={Run}

                    className="gif"
                  />
                </div>
              </div>
              <div className="button-holder">
                <button className="slide-buttons">
                  <a
                    href="https://github.com/Dbald/thedevincicode-expo"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </button>
              </div>
              <br />
            </div>
            {/* Project #4 */}
            <div className="project-slides">
              <h2 className="slide-title">Resize</h2>
              <div className="main-project-slides">
                <img
                  alt="slide"
                  src={Front3}
                  className="slides"
                  title="Resize"
                />
                <div className="description-holder">
                  <div className="slide-description">
                    This is was a sprint challenge to test User Interface and
                    Responsive Web Design. <br />
                    <br />
                    Tech: HTML, CSS, Netlify.{" "}
                  </div>
                  <img
                    alt="slide"
                    src="https://media.giphy.com/media/3niyauIaN9Ox7ki9bJ/giphy.gif"

                    className="gifs"
                  />
                </div>
              </div>
              <div className="button-holder">
                <button className="slide-buttons">
                  <a
                    href="https://admiring-pike-fb47c1.netlify.com/"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </button>
                <button className="slide-buttons">
                  <a
                    href="https://github.com/Dbald/Sprint-Challenge--UI-Responsive"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </button>
              </div>
              <br /> 
            </div>
        </div>
      </div>
    );
  }
}