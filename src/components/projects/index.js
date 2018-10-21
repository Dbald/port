import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import './projects.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../navbar/header';
import Front1 from '../../img/p1_front.png';
import Back1 from '../../img/p1_back.png';
import Mobilef1 from '../../img/p1_mobile_front.png';
import Mobileb1 from '../../img/p1_mobile_back.png';
import Front2 from '../../img/p2_front.png';
import Back2 from '../../img/p2_back.png';
import Mobilef2 from '../../img/p2_mobile_front.png';
import Mobileb2 from '../../img/p2_mobile_back.png';


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
										<img className="web" src={Front1} /><img className="mobile" src={Mobilef1} />
    								</div>
    								<div className="flip-card-back">
											<a href="https://www.givememymoney.app"><img className="web" src={Back1} /><img className="mobile" src={Mobileb1} /></a>
    								</div>
  								</div>
								</div>
								<div className="flip-card">
  								<div className="flip-card-inner">
    								<div className="flip-card-front">
										<img className="web" src={Front1} /><img className="mobile" src={Mobilef1} />
    								</div>
    								<div className="flip-card-back">
											<a href="https://www.givememymoney.app"><img className="web" src={Back1} /><img className="mobile" src={Mobileb1} /></a>
    								</div>
  								</div>
								</div>
  							</div>
								<div className="column">
								<div className="flip-card">
  								<div className="flip-card-inner">
    								<div className="flip-card-front">
      								<img className="web" src={Front2} /><img className="mobile" src={Mobilef2} />
    								</div>
    								<div className="flip-card-back">
											<a href="#"><img className="web" src={Back2} /><img className="mobile" src={Mobileb2} /></a>
    								</div>
  								</div>
								</div>
								<div className="flip-card">
  								<div className="flip-card-inner">
    								<div className="flip-card-front">
										<img className="web" src={Front1} /><img className="mobile" src={Mobilef1} />
    								</div>
    								<div className="flip-card-back">
											<a href="https://www.givememymoney.app"><img className="web" src={Back1} /><img className="mobile" src={Mobileb1} /></a>
    								</div>
  								</div>
								</div>
  							</div>
								<div className="column">
								<div className="flip-card">
  								<div className="flip-card-inner">
    								<div className="flip-card-front">
										<img className="web" src={Front1} /><img className="mobile" src={Mobilef1} />
    								</div>
    								<div className="flip-card-back">
											<a href="https://www.givememymoney.app"><img className="web" src={Back1} /><img className="mobile" src={Mobileb1} /></a>
    								</div>
  								</div>
								</div>
								<div className="flip-card">
  								<div className="flip-card-inner">
    								<div className="flip-card-front">
										<img className="web" src={Front1} /><img className="mobile" src={Mobilef1} />
    								</div>
    								<div className="flip-card-back">
											<a href="https://www.givememymoney.app"><img className="web" src={Back1} /><img className="mobile" src={Mobileb1} /></a>
    								</div>
  								</div>
								</div>
  							</div>
								<div className="column">
								<div className="flip-card">
  								<div className="flip-card-inner">
    								<div className="flip-card-front">
										<img className="web" src={Front1} /><img className="mobile" src={Mobilef1} />
    								</div>
    								<div className="flip-card-back">
											<a href="https://www.givememymoney.app"><img className="web" src={Back1} /><img className="mobile" src={Mobileb1} /></a>
    								</div>
  								</div>
								</div>
								<div className="flip-card">
  								<div className="flip-card-inner">
    								<div className="flip-card-front">
										<img className="web" src={Front1} /><img className="mobile" src={Mobilef1} />
    								</div>
    								<div className="flip-card-back">
											<a href="https://www.givememymoney.app"><img className="web" src={Back1} /><img className="mobile" src={Mobileb1} /></a>
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