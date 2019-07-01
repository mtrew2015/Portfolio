import React, { Component } from 'react';
import './Projects.scss';

 class Projects extends Component {
    render() {
        return (
            <div>
             <h1>Projects Page</h1>   
             <div className="projectBlock">
                 <h2>Project Title</h2>
                 <p>Description:</p>
                 <p>Insert Image Here</p>
                 <p>Link</p>
                 <p>Github Repo</p>

             </div>
            </div>
        )
    }
}

export default Projects
