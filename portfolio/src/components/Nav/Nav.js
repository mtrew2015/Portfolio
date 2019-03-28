import React, { Component } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return (
      <nav className="nav">
        <div className="menu">
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        </div>
			</nav>
		);
	}
}

export default Nav;
