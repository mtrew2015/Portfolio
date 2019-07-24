import React, { Component } from 'react';
import './FrontPage.scss';

class FrontPage extends Component {
	render() {
		return (
			<div className='container'>
				<div className='jumbotron'>
					<div className='textContainer'>
						<h1>Hello, My Name is Michael and I am a Web Developer</h1>
						<h3>I look forward to helping you on your next project.</h3>
						<button className='contactButton'>Contact Me</button>
					</div>
				</div>

				<div className='featureContainer'>
					<h1>About Michael</h1>
					<div className='boxContainer'>
						<div className='box'>
							<h2>Creative Problem Solver</h2>
							<p>
								I love intense, complex problems. It's something that I've always focused on whether its in web
								development, or any other aspect of my life.
							</p>
						</div>
						<div className='box'>
							<h2>Quality, Clean Code</h2>
							<p>
								I believe in doing the code right the first time and having well organized code for readability and for other developers to be able to read my code with ease.
							</p>
						</div>
						<div className='box'>
							<h2>Weekend Hacker/Adventurer</h2>
							<p>
								Outside of learning new things related to code, I enjoy golfing with family, or traveling or hiking in a
								local park. I love staying active, and always find something to fill my off-time with. I'm always up for
								trying something new (except skydiving) I'm still contemplating that.
							</p>
						</div>
						<div className='box'>
							<h2>Quick Learner</h2>
							<p>
								I have definitely learned how to learn quickly throughout my learning career as I just didn't have a
								full 40 hour week to study, so I had to be efficient and learn how to learn quickly, efficiently, and
								somewhere along the way I've really grown to be a curious learner, always wanting to stay up to date
								with new things in my field.
							</p>
						</div>
					</div>
				</div>
				<div className='skillSection'>
                    <h1>Skills and Frameworks</h1>
                    <ul>
                    <li>React JS</li>
					<li>Python</li>
                    <li>Testing</li>
                    <li>Github</li>
                    <li>JavaScript</li>
                    <li>Node JS</li>
                    <li>Express</li>
                    <li>SQL</li>
                    <li>SQLite3</li>
                    <li>Redux.js</li>
                    <li>PostgreSQL</li>
                    <li>KNEX JS</li>
                    <li>Bootstrap</li>
                    <li>CSS/SASS/LESS</li>
                    <li>Prisma</li>
                    <li>GraphQL</li>
                    <li>Apollo Client/Server</li>
                    <li>Google Firebase</li>
                    <li>oAuth</li>
                    </ul>
				</div>
			</div>
		);
	}
}

export default FrontPage;
