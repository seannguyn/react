import React, { Component } from 'react';
import uuid from 'uuid'
class AddProjectItem extends Component {

  static defaultProps = {
    categories:['D','E','F','G']
  }

  constructor() {
    super();
    this.state ={
      newProject : {}
    }


  }

  handleSubmit(e){
    console.log(this.refs.title.value);
    if (this.refs.title.value === '' ) {
      alert("enter something")
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        // console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {

    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });

    return (
      <div>
        <h3>add project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>

          <div>
            <label>Title</label>
            <input type="test" ref="title"/>
          </div>


          <div>
            <label>Category</label>
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <input type="submit"/>
        </form>
      </div>

    );
  }
}

export default AddProjectItem;
