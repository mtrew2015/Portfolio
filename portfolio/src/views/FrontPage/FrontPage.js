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
							<p>
								Every web page will be carefully crafted to include latest design principles and best
								practices. I strive for my websites to look good on any device.
							</p>
						</div>
						<div className="box">
							<h2>Designed to Spec</h2>
							<p>
								Let me make your design of a website come true. I can hand craft any design that you
								would like to accomplish.
							</p>
						</div>
						<div className="box">
							<h2>Attention to Detail</h2>
							<p>Attention to details matter, and I want to make sure every element looks great.</p>
						</div>
						<div className="box">
							<h2>Focus on Quality</h2>
							<p>
								Final products will be thoroughly tested to ensure that your site or web app performs as
								its expected to.{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FrontPage;
