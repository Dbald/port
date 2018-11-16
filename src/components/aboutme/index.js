import React, { Component } from "react";
import "../../App.css";
import "./aboutme.css";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import SkillBar from "react-skillbars";
import file from "../../assets/Devin_Baldwin_-_Resume_-_Software_Engineer.pdf";

const skills = [
  { type: "HTML", level: 99 },
  { type: "CSS", level: 98 },
  { type: "JavaScript", level: 68 },
  { type: "React", level: 76 },
  { type: "Native", level: 70 },
  { type: "Express", level: 70 },
  { type: "UX/UI", level: 85 },
  { type: "VR/AR", level: 68 },
  { type: "MongoDB", level: 70 },
  { type: "Wordpress", level: 90 },
  { type: "Git", level: 86 }
];

class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <h1 className="Title">About Me</h1>
        <Tabs className="tab-container">
          <TabList className="tablist">
            <Tab className="tab">
              <b>Art</b>
            </Tab>
            <Tab className="tab">
              <b>Music</b>
            </Tab>
            <Tab className="tab">
              <b>Sports</b>
            </Tab>
            <Tab className="tab">
              <b>Resume</b>
            </Tab>
          </TabList>
          {/* ART */}
          <TabPanel className="tabpanel">
            <div className="art">
              <div className="inner-art">
                <div className="inner-art-container">
                  <div className="top-inner-art">
                    <div className="artBio">
                      <h2>My Artistic Expression</h2>
                      <h4>
                        <i>
                          <b>
                            &nbsp;&nbsp;In my spare time, I enjoy making 8 bit
                            portraits and animations. I often get a lot of
                            clients who want animations or a portrait, so I'm
                            able to make money off of my expression.
                          </b>
                        </i>
                      </h4>
                    </div>
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
                    <img
                      className="art-img"
                      src="https://i.imgur.com/11BVHje.jpg"
                      alt="tdc"
                    />
                    {/* <img
                      className="art-img"
                      src="https://i.imgur.com/mURQ1rT.png"
                      alt="tdc1"
                    /> */}
                  </div>
                  <div className="bottom-inner-art">
                    <h4>
                      <i>
                        <b>
                          &nbsp;&nbsp;I dabble in film, photography and editing.
                          Which in turn, helps me create viral videos,
                          commercials and skits for social media.
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
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          {/* MUSIC */}
          <TabPanel className="tabpanel">
            <div className="music">
              <div className="inner-music">
                <div className="inner-music-container">
                  <div className="main-inner-music">
                    <h2>My Musical Expression</h2>
                    <h4>
                      <i>
                        <b>
                          &nbsp;&nbsp;I've produced music for a multitude of
                          artists. From known to unknown artists, but I prefer
                          to make music for the video games I plan to make in
                          the near future. I come from a musical family.From a
                          very early age, I was indoctrinated into the music
                          industry, but never wanted to take part.
                        </b>
                      </i>
                    </h4>
                    <iframe
                      width="100%"
                      height="450"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/5081193&color=%23f03f3f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    />
                  </div>
                </div>
                <div className="side-inner-music">
                  <h2>Podcast</h2>
                  <h4>
                    <i>
                      <b>
                        &nbsp;&nbsp;I do a podcast called, The Devinci Code.
                        Where I talk about different ways to stay positive when
                        surronded by negativity. I also have tech talks and
                        feature the song of the week. The first new episode's
                        airing date is TBA.
                      </b>
                    </i>
                  </h4>
                  <iframe
                    src="https://open.spotify.com/embed/show/3u9SMMXVGMGvJgy0XTje5P"
                    width="300"
                    height="380"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  />
                </div>
              </div>
            </div>
          </TabPanel>
          {/* SPORTS */}
          <TabPanel className="tabpanel">
            <div className="sports">
              <div className="inner-sports">
                <div className="inner-sports-container">
                  <div className="main-inner-sports">
                    <h2>My Athletic Expression</h2>
                    <h4>
                      <i>
                        <b>
                          &nbsp;&nbsp;I've been an athlete all my life. I can
                          play any sport, but my favorites are basketball and
                          track and field. Challenge me to a race or a game of
                          basketball, I dare you!!!
                        </b>
                      </i>
                    </h4>
                    <img
                      className="sports-img"
                      src="https://media.giphy.com/media/3KZldEpdLlXxZkDTBZ/giphy-downsized-large.gif"
                      alt="track"
                    />
                    <h3>400 meter dash in 49.55</h3>
                  </div>
                </div>
                <div className="side-inner-sports">
                  <h2>My Teams</h2>
                  <img
                    className="teams-img"
                    src="http://www.stickpng.com/assets/images/58419d0aa6515b1e0ad75a6c.png"
                    alt="lakers"
                  />
                  <img
                    className="teams-img"
                    src="https://images.vexels.com/media/users/3/141917/isolated/preview/5fd8af150242119f0ccfc5d04a1f8277-los-angeles-rams-american-football-by-vexels.png"
                    alt="rams"
                  />
                  <img
                    className="teams-img"
                    src="https://mbtskoudsalg.com/images/dodgers-svg-4.png"
                    alt="dodgers"
                  />
                  <img
                    className="teams-img"
                    src="https://vignette.wikia.nocookie.net/logopedia/images/f/f8/LA_Kings_1988_logo.png/revision/latest?cb=20140620173122"
                    alt="kings"
                  />
                  <img
                    className="teams-img"
                    src="https://s3.amazonaws.com/freebiesupply/large/2x/la-galaxy-logo-transparent.png"
                    alt="galaxy"
                  />
                  <h3 className="quote">
                    <i>
                      &nbsp;&nbsp;Sports are such a great teacher. I think of
                      everything they've taught me: camaraderie, humility, how
                      to resolve differences. <br /> - Kobe Bryant
                    </i>
                  </h3>
                </div>
              </div>
            </div>
          </TabPanel>
          {/* RESUME */}
          <TabPanel className="tabpanel">
            <div className="resume">
              <div className="inner-resume">
                <div className="top-inner-resume">
                  <h1>Devin Baldwin</h1>
                  <img
                    className="avatar"
                    src="https://i.imgur.com/hv20TVU.jpg?2"
                  />
                  <h2>
                    <b>Software Engineer | Content Creator</b>
                  </h2>
                  <h4 className="bio">
                    &nbsp;&nbsp;Hello! I enjoy working with Javascript, React,
                    Redux, MongoDB, Express.js, Node.js, React Native, as well
                    as HTML and CSS. I'm always looking to learn and integrate
                    new programming languages to have in my arsenal. When I'm
                    not coding, I create viral video content for social media
                    and produce music.
                  </h4>
                  <div className="socialIcons">
                    <a href={file}>
                      <img
                        id="left"
                        className="icons"
                        src="https://mbtskoudsalg.com/images/resume-icon-png-4.png"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/devin-baldwin-a7381073/">
                      <img
                        className="icons"
                        src="https://opinahjo.fi/wp-content/uploads/2013/04/LinkedIn.png"
                      />
                    </a>
                    <a href="https://www.instagram.com/itsdevinci/">
                      <img
                        className="icons"
                        src="https://i0.wp.com/lilliputadventure.com/wp-content/uploads/2018/06/Instagram-Icon.png?fit=1455%2C1454"
                      />
                    </a>

                    <a href="https://www.youtube.com/channel/UCdWMwP8ynch1I0fkgTZUrLw/videos">
                      <img
                        className="icons"
                        src="https://upload.wikimedia.org/wikipedia/commons/4/40/Youtube_icon.svg"
                      />
                    </a>
                    <a href="https://github.com/Dbald">
                      <img
                        className="icons"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png"
                      />
                    </a>
                  </div>
                </div>
                <div className="inner-resume-container">
                  <div className="left-inner-resume">
                    <h2>Skills</h2>
                    <SkillBar
                      animationDelay={0}
                      animationDuration={3000}
                      skills={skills}
                    />
                  </div>
                  <div className="middle-inner-resume">
                    <h2>Experience</h2>
                    {/* Devinci Tech Solutions */}
                    <img
                      className="exp-img"
                      src="https://i.imgur.com/B1Wa26v.png"
                      alt="dts"
                    />
                    <h4>
                      <i>
                        Freelancer at Devinci Tech Solutions April
                        2017  –  Present
                      </i>
                      <br />
                      <br /> &nbsp;&nbsp;I freelance under Devinci Tech
                      Solutions, I provide Web and Social Media services to
                      clients, as well as music production.
                    </h4>
                    {/* TheLatest.com */}
                    <img
                      className="exp-img"
                      src="data:image/jpeg;base64,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"
                      alt="tl"
                    />
                    <h4>
                      <i>
                        Front End Developer Intern at TheLatest.com Inc, Santa
                        Monica, CA September 2015  –  February 2016{" "}
                      </i>
                      <br />
                      <br /> &nbsp;&nbsp;As a intern, I worked on the design and
                      implementation of the front-end of the Android mobile
                      application using Android Studio.
                    </h4>
                  </div>
                  <div className="right-inner-resume">
                    <h2>Education</h2>
                    {/* Lambda School */}
                    <img
                      className="exp-img"
                      src="https://yt3.ggpht.com/a-/AN66SAw9C1HPxBru_POv5bcGj8yLp8OSc18VosnELA=s900-mo-c-c0xffffffff-rj-k-no"
                      alt="lambda"
                    />
                    <h4>
                      <i>
                        Certiﬁcate In Software Engineering, Lambda School, San
                        Francisco January 2018  –  August 2018
                      </i>
                      <br />
                      <br /> &nbsp;&nbsp;The Lambda Academy of Computer Science
                      covers computing from its fundamentals to fully-deployed,
                      applications. Lambda School is an extensive full-time 7
                      month Computer Science Academy focused on Full-Stack Web
                      Development. Technologies covered at Lambda:
                      <br />  -Responsive UI/UX Development with use of media
                      queries
                      <br />  -Web Tools, UI Frameworks, Preprocessors: CSS,
                      LESS, SASS, SCSS
                      <br />
                       -Advanced Javascript ES6 & JQuery
                      <br />
                        -Intermediate ReactJS
                      <br />
                        -Redux
                      <br />  -Node JS/Express 
                      <br /> -RESTful APIs for CRUD 
                      <br /> -HTTP 
                      <br />
                      -MongoDB (NoSQL) <br />
                       -Authentication 
                      <br /> -Testing (Mocha, Chai) 
                      <br />
                      -Data Structures/ Algorithms 
                      <br />  -Computer Architecture 
                      <br /> -C/ Operating Systems 
                      <br /> -Python
                    </h4>
                    {/* SMC */}
                    <img
                      className="exp-img"
                      src="http://4studenthealth.relationinsurance.com/wp-content/uploads/Santa-Monica-College-logo.png"
                      alt="smc"
                    />
                    <h4>
                      <i>
                        Associate's degree in Computer Programming, Santa Monica
                        College ,Santa Monica 2015 – 2017{" "}
                      </i>
                      <br />
                      <br /> &nbsp;&nbsp;Courses included programming in
                      low-level and essential languages, Database Theory,
                      Operating Systems Fundamentals, Computer Hardware and Data
                      Structures.
                    </h4>
                  </div>
                </div>
                <div className="bottom-inner-resume" />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default AboutMe;
