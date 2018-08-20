import React, { Component } from 'react';

class ProjectItems extends Component {

  handleDelete(id) {
    console.log("project_item",id);
    this.props.onDelete(id)
  }

  render() {


    return (
      <li className="ProjectItems">
        <strong> {this.props.projectItem.title} </strong> : {this.props.projectItem.category}
        <button onClick={this.handleDelete.bind(this, this.props.projectItem.id)}> deleting </button>
      </li>

    );
  }
}

export default ProjectItems;
