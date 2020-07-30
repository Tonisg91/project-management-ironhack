import React, { Component } from 'react'
import axios from 'axios'

export class AddProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            title: this.state.title,
            description: this.state.description
        }
        axios.post('http://localhost:3000/api/projects', body)
            .then(res => {
                this.setState({
                    title: '',
                    description: ''
                })
            })
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={this.state.title} 
                        onChange={this.handleChange}
                    />
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text" 
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="GUARDAR POST"/>
                </form>
            </div>
        )
    }
}

export default AddProject
