import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../../components/Footer/footer'
import FrontPage from '../../views/FrontPage/FrontPage';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Router>
          <Nav />
          <FrontPage/>
          <Footer/>
				</Router>
			</div>
		);
	}
}

export default App;
