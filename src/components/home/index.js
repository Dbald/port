import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import title from '../../img/header_shade_transparent_wht.png';
import mobile from '../../img/Welcome.gif';
import './intro.css';
import '../../App.css';

export default class Home extends Component {

  render() {
    return (
        <div className="Header">
            <div className="Header-Image-Responsive">
              <img className="Header-Image" id="title" src={title} alt="title" />
              <img className="Mobile-Image" src={mobile} alt="mobile" />
              {/* <InstagramEmbed
  url="https://www.instagram.com/p/B4QU2SKF5Q4/" 
  maxWidth={1000}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/> */}
      
            </div>
        </div>
    );
  }
}

