import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/navbar/header';
import Footer from './components/navbar/footer';
import './App.css';
import Home from './components/home';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Blog from './components/blog';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Header} />
          {/* <Route path="/" component={Footer} /> */}
          <Route path="/home" component={Home}  />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog}/>
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
