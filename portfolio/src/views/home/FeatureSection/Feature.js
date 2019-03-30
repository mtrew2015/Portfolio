import './Feature.scss';

import React, { Component } from 'react';

class Feature extends Component {
	render() {
		return (
			<div className='container'>
				<h1>Development Done Better</h1>
				<div className='boxContainer'>
					<div className='box'>
						<h2>Services To Meet Your Companies Needs</h2>
					</div>
					<div className='box'>
						<h2>Technologies Used To Best Suit Your Project</h2>
					</div>
					<div className='box'>
						<h2>Thoughtful Workflows</h2>
					</div>
					<div className='box'>
						<h2>Your Satisfaction Is Ensured</h2>
					</div>
				</div>
			</div>
		);
	}
}

export default Feature;
