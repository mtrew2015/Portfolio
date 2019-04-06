import React, { Component } from 'react';
import './FrontPage.scss';

class FrontPage extends Component {
	render() {
		return (
			<div className="body">
				<div className="jumbotron">
					<div className="textContainer">
						<h1>Hello My Name Is Michael and I am a Web Developer</h1>
						<h3>I look forward to helping you on your next project</h3>
						<button>Contact Me</button>
					</div>
				</div>

				<div className="featureContainer">
					<h1>Development Done Better</h1>
					<div className="boxContainer">
						<div className="box">
							<h2>Services To Meet Your Companies Needs</h2>
						</div>
						<div className="box">
							<h2>Technologies Used To Best Suit Your Project</h2>
						</div>
						<div className="box">
							<h2>Thoughtful Workflows</h2>
						</div>
						<div className="box">
							<h2>Your Satisfaction Is Our Priority</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FrontPage;
