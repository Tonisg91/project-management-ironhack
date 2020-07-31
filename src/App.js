import React from 'react';
import './App.css';
import ProjectList from './components/projects/ProjectList';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import ProjectDetails from './components/projects/ProjectDetails';
import Map from './components/Map'
import FileUpload from './components/FileUpload';

function App() {
  return (
    <div >
      <NavBar />
    <Switch>
      <Route exact path="/">
        <h1>Homepage</h1>
      </Route>
      <Route exact path="/projects" component={ProjectList} />
      <Route path="/projects/:id" render={(props) => <ProjectDetails {...props}/>}/>
      <Route path="/map" component={Map} />
      <Route path="/fileupload" component={FileUpload} />
    </Switch>
    </div>
  );
}

export default App;
