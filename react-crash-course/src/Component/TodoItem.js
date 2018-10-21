import React, { Component } from 'react';

class TodoItem extends Component {


  render() {


    return (
      <li className="TodoItems">
        <strong>{this.props.todo.title}</strong>
      </li>

    );
  }
}

export default TodoItem;
