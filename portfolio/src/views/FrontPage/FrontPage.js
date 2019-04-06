import React, { Component } from 'react';
import './FrontPage.scss';

class FrontPage extends Component {
	render() {
		return (
			<div className="body">
				<div className="jumbotron">
					<div className="textContainer">
						<h2>Hello My Name is Michael and I am a Full-Stack Web Developer</h2>
						<button>Contact Me</button>
					</div>
				</div>

				<div className="featureContainer">
					<h1>Development Done Better</h1>
					<div className="boxContainer">
						<div className="box">
							<h2>Dynamic Web Pages</h2>
						</div>
						<div className="box">
							<h2>Responsive Designs</h2>
						</div>
						<div className="box">
							<h2>Thoughtful Workflows</h2>
						</div>
						<div className="box">
							<h2>Focus on Quality</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FrontPage;
