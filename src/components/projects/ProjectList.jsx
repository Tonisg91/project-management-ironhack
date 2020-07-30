import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3000/api/projects")
        .then(res => this.setState({projects: res.data}))
    }



    render() {

        const renderProjects = this.state.projects.map(project => (
            <div key={project._id}>
                <h3><Link to={"/projects/" + project._id}>{project.title}</Link></h3>
                <p>{project.description}</p>
            </div>
        ))

        return (
            <div>
                {renderProjects}
            </div>
        )
    }
}

export default ProjectList
