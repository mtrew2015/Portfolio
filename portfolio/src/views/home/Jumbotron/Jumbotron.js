import React, { Component } from 'react';
import './Jumbotron.scss';

export default class Jumbotron extends Component {
	render() {
		return (
			<div className='jumbotron'>
				<div className='textContainer'>
					<h1>Hello My Name Is Michael and I am a Web Developer</h1>
					<h3>I look forward to helping you on your next project</h3>
					<button>Contact Me</button>
				</div>
			</div>
		);
	}
}
