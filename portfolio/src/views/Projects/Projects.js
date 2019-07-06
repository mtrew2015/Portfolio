import React, { Component } from 'react';
import './Projects.scss';
import { Link } from 'react-router-dom';

class Projects extends Component {
	render() {
		return (
			<div>
				<h1 className="projectH1">Projects Page</h1>
				<div className="projectBlock">
					<h2>Rate My Diy </h2>
					<p>
						A web app built with React/GraphQL, and Apollo on the front end and Nexus, Prisma, and Apollo on
						the back end that lets users upload projects they have completed, and then allow other users to
						rate, and review their implementation of the project.
					</p>
					<img src={require('../../assets/PicApp - Apple iMac.png')} alt={'rate my diy'} />
					<button>
						<a href="http://www.ratemydiy.tk">View Project</a>
					</button>
					<a href={'https://github.com/Lambda-School-Labs/labspt2-rate-my-diy'}>Github Repo</a>
					<div className="projectBlock">
						<h2>Lamda Notes </h2>
						<p>
							A full stack web app that allows users to log in and save notes that they can refer to later with a quick sign in. React JS was used for the front end, while a Node JS and express server were implemented with PostgreSQL for the back end.
						</p>
						<img src={require('../../assets/PicApp - Apple Macbook.png')} alt={'rate my diy'} />
						<button>
							<a href="http://www.lambdanotes.tk">View Project</a>
						</button>
						<a href={'https://github.com/mtrew2015/notes-front-end'}>Github Repo</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
