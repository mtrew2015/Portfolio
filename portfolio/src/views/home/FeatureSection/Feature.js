import './Feature.scss';

import React, { Component } from 'react';

class Feature extends Component {
	render() {
		return (
			<div className='container'>
				<h1>Development Done Better</h1>
				<div className='boxContainer'>
					<div className='box'>
						<h2>Feature One</h2>
					</div>
					<div className='box'>
						<h2>Feature Two</h2>
					</div>
					<div className='box'>
						<h2>Feature Three</h2>
					</div>
					<div className='box'>
						<h2>Feature Four</h2>
					</div>
				</div>
			</div>
		);
	}
}

export default Feature;
