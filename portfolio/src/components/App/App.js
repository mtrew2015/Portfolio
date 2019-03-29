import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../../views/Home/Home'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Router>
					<Nav />
					<Home/>
				</Router>
			</div>
		);
	}
}

export default App;
