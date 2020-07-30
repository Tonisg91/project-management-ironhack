import React from 'react';
import './App.css';
import AddProject from './components/projects/AddProject';
import ProjectList from './components/projects/ProjectList';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import ProjectDetails from './components/projects/ProjectDetails';

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
    </Switch>
    </div>
  );
}

export default App;
