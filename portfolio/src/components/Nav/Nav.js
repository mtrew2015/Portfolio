import React, { Component } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return (
			<div className="nav">
				<div className="menu">
					<Link to="/">Home</Link>
					<Link to="/projects">Projects</Link>
				</div>
			</div>
		);
	}
}

export default Nav;
