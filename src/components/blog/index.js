import React, { Component } from 'react';
import '../../App.css';
import './blog.css';

class Blog extends Component {
  render() {
    return(
      <div className="Blog">
        <h1 className="Title">Blog</h1>
				<div className="container">
          <div className="Entries">
						<div className="span">
        		<b>Aug 13</b>
						<a href="https://medium.com/@devinbaldwin/hello-world-i-want-to-be-a-programmer-i-think-e75b328173e0"><img className="icon" src="https://cdn-images-1.medium.com/max/1600/1*emiGsBgJu2KHWyjluhKXQw.png" alt="Medium"/></a>
						<h2 className="blog-title">“Hello World!”.. I want to be a programmer!</h2>
						<p>&nbsp;&nbsp; The day that you wake up and decide that you want to get into programming, 
							is the day that you throw caution into the wind and embark on a new journey. 
							A guaranteed adventure, filled with excitement, syntax and innovation! Congrats 
							on starting your journey as a programmer! There are many languages and paths to 
							choose from within the tech industry. The internet has a wide range of resources, 
							I will be naming my Top 3.<br/><br/>
							1. One site that has been most beneficial to me personally is <a href="https://www.codecademy.com/">Codeacademy</a>. Codeacademy 
							is where you can obtain basic knowledge on how programming works. The platform 
							revolves around interactive learning; you read a little, type your code right into 
							the browser, and see results immediately. The tech stack taught at Codeacademy 
							include: HTML & CSS, JavaScript, PHP, Python, Ruby, Angularjs, The Command Line, 
							and more.<br/><br/> 2. YouTube will be one of your greatest tools in your programming journey, 
							not only is it a great form of entertainment, but a pivotal resource for learning 
							anything you desire to learn. Some great programming channels are:<br/><br/>
							<a href="https://www.youtube.com/channel/UCpOIUW62tnJTtpWFABxWZ8g">Codecourse</a><br/><br/>
							The courses on his channel include JavaScript breakout game creation, Lavarel, 
							Real-time chat using the command line, PHP, tips for writing cleaner code, 
							building a shopping cart using PHP and various such other concepts.<br/><br/>
							<a href="https://www.youtube.com/user/thenewboston">Thenewboston</a><br/><br/>
							The channel also contains various videos which give an insight into various 
							programming languages such as C, R, C++, HTML, Ruby, Java etc.<br/><br/>
							<a href="https://www.youtube.com/channel/UCmgWnKIhmOi-MuRUC62mOFw">Lambda School</a><br/><br/>
							With the Free Online Web Mini Bootcamp, Lambda provides a free introduction to 
							web development, live-streamed monthly. They cover HTML/CSS and Javascript.<br/><br/>
							3. Last but most certainly not least, once you have the basic understanding of 
							programming terms and concepts, I highly suggest taking a look at Lambda School. 
							There courses include: Full Stack Development, Data Science and IOS Development. 
							In the Full Stack course, they have a wide array of subjects that range from HTML/CSS 
							to Computer Architecture. Lambda School, in my experience has provided me with a wealth 
							of information and programming practices that has taken my passion for programming to 
							new heights. With full-time and part-time options, Lambda works with your schedule, 
							propelling you to be the best programmer you can be!<br/><br/>&nbsp;&nbsp; Well my friends if you’ve made 
							it this far then you have some idea of where to go from here. As for my own journey, 
							I still have a lot to learn and am excited for what the future holds. Now that I’ve 
							graduated Lambda School, the job hunt begins…</p>
						</div>
          </div>
					{/* <div className="Entries">
						<div className="span">
        		<b>Aug 13</b>
						<a href="https://medium.com/@devinbaldwin/hello-world-i-want-to-be-a-programmer-i-think-e75b328173e0"><img className="icon" src="https://cdn-images-1.medium.com/max/1600/1*emiGsBgJu2KHWyjluhKXQw.png" alt="Medium"/></a>
						<h3>“Hello World!”.. I want to be a programmer!</h3>
						<p>&nbsp;&nbsp; The day that you wake up and decide that you want to get into programming, 
							is the day that you throw caution into the wind and embark on a new journey. 
							A guaranteed adventure, filled with excitement, syntax and innovation! Congrats 
							on starting your journey as a programmer! There are many languages and paths to 
							choose from within the tech industry. The internet has a wide range of resources, 
							I will be naming my Top 3.<br/><br/>
							1. One site that has been most beneficial to me personally is <a href="https://www.codecademy.com/">Codeacademy</a>. Codeacademy 
							is where you can obtain basic knowledge on how programming works. The platform 
							revolves around interactive learning; you read a little, type your code right into 
							the browser, and see results immediately. The tech stack taught at Codeacademy 
							include: HTML & CSS, JavaScript, PHP, Python, Ruby, Angularjs, The Command Line, 
							and more.<br/><br/> 2. YouTube will be one of your greatest tools in your programming journey, 
							not only is it a great form of entertainment, but a pivotal resource for learning 
							anything you desire to learn. Some great programming channels are:<br/><br/>
							<a href="https://www.youtube.com/channel/UCpOIUW62tnJTtpWFABxWZ8g">Codecourse</a><br/><br/>
							The courses on his channel include JavaScript breakout game creation, Lavarel, 
							Real-time chat using the command line, PHP, tips for writing cleaner code, 
							building a shopping cart using PHP and various such other concepts.<br/><br/>
							<a href="https://www.youtube.com/user/thenewboston">Thenewboston</a><br/><br/>
							The channel also contains various videos which give an insight into various 
							programming languages such as C, R, C++, HTML, Ruby, Java etc.<br/><br/>
							<a href="https://www.youtube.com/channel/UCmgWnKIhmOi-MuRUC62mOFw">Lambda School</a><br/><br/>
							With the Free Online Web Mini Bootcamp, Lambda provides a free introduction to 
							web development, live-streamed monthly. They cover HTML/CSS and Javascript.<br/><br/>
							3. Last but most certainly not least, once you have the basic understanding of 
							programming terms and concepts, I highly suggest taking a look at Lambda School. 
							There courses include: Full Stack Development, Data Science and IOS Development. 
							In the Full Stack course, they have a wide array of subjects that range from HTML/CSS 
							to Computer Architecture. Lambda School, in my experience has provided me with a wealth 
							of information and programming practices that has taken my passion for programming to 
							new heights. With full-time and part-time options, Lambda works with your schedule, 
							propelling you to be the best programmer you can be!<br/><br/>&nbsp;&nbsp; Well my friends if you’ve made 
							it this far then you have some idea of where to go from here. As for my own journey, 
							I still have a lot to learn and am excited for what the future holds. Now that I’ve 
							graduated Lambda School, the job hunt begins…</p>
						</div>
          </div>
					<div className="Entries">
						<div className="span">
						<b>Aug 13</b>
						<a href="https://medium.com/@devinbaldwin/hello-world-i-want-to-be-a-programmer-i-think-e75b328173e0"><img className="icon" src="https://cdn-images-1.medium.com/max/1600/1*emiGsBgJu2KHWyjluhKXQw.png" alt="Medium"/></a>
						<h3>“Hello World!”.. I want to be a programmer!</h3>
						<p>&nbsp;&nbsp; The day that you wake up and decide that you want to get into programming, 
							is the day that you throw caution into the wind and embark on a new journey. 
							A guaranteed adventure, filled with excitement, syntax and innovation! Congrats 
							on starting your journey as a programmer! There are many languages and paths to 
							choose from within the tech industry. The internet has a wide range of resources, 
							I will be naming my Top 3.<br/><br/>
							1. One site that has been most beneficial to me personally is <a href="https://www.codecademy.com/">Codeacademy</a>. Codeacademy 
							is where you can obtain basic knowledge on how programming works. The platform 
							revolves around interactive learning; you read a little, type your code right into 
							the browser, and see results immediately. The tech stack taught at Codeacademy 
							include: HTML & CSS, JavaScript, PHP, Python, Ruby, Angularjs, The Command Line, 
							and more.<br/><br/> 2. YouTube will be one of your greatest tools in your programming journey, 
							not only is it a great form of entertainment, but a pivotal resource for learning 
							anything you desire to learn. Some great programming channels are:<br/><br/>
							<a href="https://www.youtube.com/channel/UCpOIUW62tnJTtpWFABxWZ8g">Codecourse</a><br/><br/>
							The courses on his channel include JavaScript breakout game creation, Lavarel, 
							Real-time chat using the command line, PHP, tips for writing cleaner code, 
							building a shopping cart using PHP and various such other concepts.<br/><br/>
							<a href="https://www.youtube.com/user/thenewboston">Thenewboston</a><br/><br/>
							The channel also contains various videos which give an insight into various 
							programming languages such as C, R, C++, HTML, Ruby, Java etc.<br/><br/>
							<a href="https://www.youtube.com/channel/UCmgWnKIhmOi-MuRUC62mOFw">Lambda School</a><br/><br/>
							With the Free Online Web Mini Bootcamp, Lambda provides a free introduction to 
							web development, live-streamed monthly. They cover HTML/CSS and Javascript.<br/><br/>
							3. Last but most certainly not least, once you have the basic understanding of 
							programming terms and concepts, I highly suggest taking a look at Lambda School. 
							There courses include: Full Stack Development, Data Science and IOS Development. 
							In the Full Stack course, they have a wide array of subjects that range from HTML/CSS 
							to Computer Architecture. Lambda School, in my experience has provided me with a wealth 
							of information and programming practices that has taken my passion for programming to 
							new heights. With full-time and part-time options, Lambda works with your schedule, 
							propelling you to be the best programmer you can be!<br/><br/>&nbsp;&nbsp; Well my friends if you’ve made 
							it this far then you have some idea of where to go from here. As for my own journey, 
							I still have a lot to learn and am excited for what the future holds. Now that I’ve 
							graduated Lambda School, the job hunt begins…</p>
						</div>
					</div> */}
				</div>
			</div>
			);
    }
};

export default Blog;