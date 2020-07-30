import React, { Component } from 'react'
import axios from 'axios'

export class ProjectDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            project: {}
        }
    }

    componentDidMount() {
        axios
            .get("http://localhost:3000/api/projects/" + this.state.id)
            .then(res => this.setState({project: res.data}))
            .catch(err => console.error(err))
    }


    render() {

        const {title, description} = this.state.project

        return (
            <div>
                <h1>Project details</h1>
                <h2>{title}</h2>
                <h1>Project description</h1>
                <h4>{description}</h4>
            </div>
        )
    }
}

export default ProjectDetails
