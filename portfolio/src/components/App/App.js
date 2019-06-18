import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from '../../components/Footer/footer';
import FrontPage from '../../views/FrontPage/FrontPage';
import Projects from '../../views/Projects/Projects'
import * as ROUTES from '../../constants/routes';

class App extends Component {
	render() {
		return (
			<div className='App'>
                <Router>
                    <Nav/>
                    <Route exact path={ROUTES.FRONTPAGE} component={FrontPage} />
                    <Route path={ROUTES.PROJECTS} component={Projects} />
				</Router>
			</div>
		);
	}
}

export default App;
