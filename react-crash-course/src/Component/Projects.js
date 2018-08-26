import React, { Component } from 'react';
import ProjectItems from './ProjectItems.js'
import PropTypes from 'prop-types';
class Projects extends Component {


  handleDelete(id) {
    console.log("project",id);
    this.props.onDelete(id)
  }

  render() {
    let projectItems_;
    if (this.props.projects) {
      
      projectItems_ = this.props.projects.map( project => {
          return (
            <ProjectItems onDelete={this.handleDelete.bind(this)} key={project.title} projectItem={project}/>
          );
      });
    }

    return (
      <div className="Projects">
        <br/>
        My Project
        {this.props.test}
        <br/>
        {projectItems_}


      </div>

    );
  }
}

Projects.propTypes = {
  projects:PropTypes.array,
  onDelete:PropTypes.func
}﻿

export default Projects;
