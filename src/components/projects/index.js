import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import './projects.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../navbar/header';
import Front1 from '../../img/p1_front.png';
import Back1 from '../../img/p1_back.png';

class Projects extends Component {

    render() {
        return(
            <div className="Projects">
            	<h1 className="Title">Projects...</h1>
							<div className="row">
  							<div className="column">
								<div className="flip-card">
  								<div className="flip-card-inner">
    								<div className="flip-card-front">
      								<img src={Front1} />
    								</div>
    								<div className="flip-card-back">
											<a href="https://www.givememymoney.app"><img src={Back1} /></a>
    								</div>
  								</div>
								</div>
  							</div>
								<div className="column">
								<div className="flip-card">
  								<div className="flip-card-inner">
    								<div className="flip-card-front">
      								<img src={Front1} />
    								</div>
    								<div className="flip-card-back">
											<a href="https://www.givememymoney.app"><img src={Back1} /></a>
    								</div>
  								</div>
								</div>
  							</div>
								<div className="column">
								<div className="flip-card">
  								<div className="flip-card-inner">
    								<div className="flip-card-front">
      								<img src={Front1} />
    								</div>
    								<div className="flip-card-back">
											<a href="https://www.givememymoney.app"><img src={Back1} /></a>
    								</div>
  								</div>
								</div>
  							</div>
								<div className="column">
								<div className="flip-card">
  								<div className="flip-card-inner">
    								<div className="flip-card-front">
      								<img src={Front1} />
    								</div>
    								<div className="flip-card-back">
											<a href="https://www.givememymoney.app"><img src={Back1} /></a>
    								</div>
  								</div>
								</div>
  							</div>
								{/* <div className="column">
    							<img src={img} />
									<img src={img} />
									<img src={img} />
									<img src={img} />
									<img src={img} />
									<img src={img} />
									<img src={img} />
  							</div>
								<div className="column">
    							<img src={img} />
									<img src={img} />
									<img src={img} />
									<img src={img} />
									<img src={img} />
									<img src={img} />
									<img src={img} />
  							</div>
								<div className="column">
    							<img src={img} />
									<img src={img} />
									<img src={img} />
									<img src={img} />
									<img src={img} />
									<img src={img} />
									<img src={img} />
  							</div> */}
							</div>
            </div>
        );
    }
};

export default Projects;