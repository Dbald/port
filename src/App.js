import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/navbar/header';
import './App.css';
import Home from './components/home';
import Projects from './components/projects';
import Footer from './components/navbar/footer';
import TabBar from './components/navbar/tabbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Header} />
          <Route exact path="/" component={Home}  />
          <Route path="/home" component={Home}  />
          <Route path="/projects" component={Projects} />
          <Route path="/" component={Footer} />
          <Route path="/" component={TabBar} />
          {/* <Route path="/contact" component={Contact} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
