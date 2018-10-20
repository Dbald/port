import React, { Component } from 'react';
import title from '../../img/header_shade_transparent_wht.png';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen';
import logo from '../../img/runvinci.gif';
import './intro.css';
import '../../App.css';
import Header from '../navbar/header';

export default class Home extends Component {

  render() {
    return (
        <div className="Header">
            <div className="Header-Image-Responsive">
              <img className="Header-Image" id="title" src={title} />
            </div>
        </div>
    );
  }
}

