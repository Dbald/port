import React, { Component } from 'react';
import title from '../src/img/header_shade_transparent_wht.png';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './components/aboutme';
import Projects from './components/projects';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="Header"><img className="Header-Image" src={title}/></header>
          <Route path='/' component={AboutMe} />
          <Route path='/' component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
