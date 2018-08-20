import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Component/Projects.js'
import AddProjectItem from './Component/AddProjectItem.js'
import Todo from './Component/Todo.js'
import uuid from 'uuid'
import $ from 'jquery'

class App extends Component {

  constructor() {
      super();
      this.state = {
        projects: [],
        todo:[]
      }
  }

  getProjects(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Deisgn'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({todo:data}, function () {
          // console.log(this.state.todo);
        })

      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }

    });


  }

  componentWillMount() {
    this.getProjects();
  }

  componentDidMount() {
    this.getProjects();
    this.getTodos();
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);

    this.setState({projects:projects});
    // console.log(this.state.projects);
  }

  handleDelete(id) {
    console.log("App_root",id);
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {

    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
        <Projects test=" : ReactNative" onDelete={this.handleDelete.bind(this)} projects={this.state.projects}/>
        <AddProjectItem addProject={this.handleAddProject.bind(this)}/>
        </div>
        <br/>
        <br/>
        <Todo ToDos={this.state.todo}/>
      </div>

    );
  }
}

export default App;
