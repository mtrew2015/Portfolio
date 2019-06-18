import React, { Component } from 'react';
import './FrontPage.scss';

class FrontPage extends Component {
	render() {
		return (
			<div className='body'>
				<div className='jumbotron'>
					<div className='textContainer'>
						<h1>Hello My Name Is Michael and I am a Web Developer</h1>
						<h3>I look forward to helping you on your next project</h3>
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
							<h2>Hard Work is in my DNA</h2>
							<p>
								Hard work has always been something that I've grown up with. My parents made me get a job when I was 14
								if I wanted to have any money to buy things or hang out with friends and go places. This has carried on
								into my adult life as I've always worked and went to college, and most lately, Lambda School. I am not
								afraid of hard work, and I love being challenged.
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
                    <h1>Skills</h1>
                    <p>This is just a sample of of the skills that I possess, it is not all inclusive. I am always learning new skills and enhancing my learning of aquired skills.</p>
                    <ul className="skillsList">
                    <li>React JS</li>
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
