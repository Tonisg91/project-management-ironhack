import React, { Component } from 'react'
import service from '../api/service'

export class FileUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            imageUrl: ''
        }
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
    }

    handleFileUpload = e => {
        console.log("The file to be uploaded is: ", e.target.files[0]);
 
        const uploadData = new FormData();
        // imageUrl => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new thing in '/api/things/create' POST route
        uploadData.append("imageUrl", e.target.files[0]);
        
        service.handleUpload(uploadData)
        .then(response => {
             console.log('response is: ', response);
            // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
            this.setState({ imageUrl: response.path });
          })
          .catch(err => {
            console.log("Error while uploading the file: ", err);
          });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        service.saveNewThing(this.state)
        .then(res => {
            console.log('added:', res)
        })
        .catch(err => console.error("Error while adding the thing", err))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                    <input type="file" name="imageUrl" onChange={this.handleFileUpload}/>
                    <input type="submit" value="Cargar imagen"/>
                </form>
            </div>
        )
    }
}

export default FileUpload