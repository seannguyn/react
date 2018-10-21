import React from 'react'
import Todos from './Todos'
import { connect } from 'react-redux';
import { createTodo } from '../actions/todoActions';
import uuid from 'uuid';
class AddTodo extends React.Component {

  constructor() {
    super();

    this.state = {
      title: '',
      completed: ''
    }

  }

  onChange(e) {
    console.log(e.target.name);
    this.setState({[e.target.name] : e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    const todo = {
      id: uuid.v4(),
      title: this.state.title,
      completed: this.state.completed
    }

    this.props.createTodo(todo);

  }

  render () {

    const {title} = this.state

    return (
      <div>
        <h1>To Do</h1>
        <form onSubmit={this.onSubmit.bind(this)}>

          <div>
            <label>Title</label>
            <input onChange={this.onChange.bind(this)} name="title" type="text" placeholder="Enter title" value={title}/>
          </div>


          <div>
            <label>Completed</label>
            <br/>
            <input onChange={this.onChange.bind(this)} name="completed" type="radio" value="true"/>True
            <br/>
            <input onChange={this.onChange.bind(this)} name="completed" type="radio" value="false"/>False

          </div>

          <input type="submit" className="btn btn-primary"/>
        </form>
      <hr/>
      <Todos/>
      </div>
    )
  }
}

export default connect(null, {createTodo})(AddTodo);
