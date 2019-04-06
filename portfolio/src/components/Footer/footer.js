import React from 'react';
import {Link} from 'react-router-dom'
import './footer.scss'

function Footer() {
	return (
		<div className='footerContainer'>
			<Link to='/'>Home</Link>
			<Link to ='/about'>About</Link>
			<Link to='/contact'>Contact Us</Link>
			
		</div>
	);
}
export default Footer;
