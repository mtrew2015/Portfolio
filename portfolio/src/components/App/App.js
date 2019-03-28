import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Jumbotron from '../Jumbotron/Jumbotron';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Router>
					<Nav />
					<Jumbotron />
				</Router>
			</div>
		);
	}
}

export default App;
