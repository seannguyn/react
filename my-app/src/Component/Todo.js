import React, { Component } from 'react';
import TodoItem from './TodoItem.js'

class Todo extends Component {

  render() {
    let TodoItems_;
    if (this.props.ToDos) {

      TodoItems_ = this.props.ToDos.map( todo => {
          // console.log(todo.title);
          return (
            <TodoItem key={todo.id} todo={todo}/>
          );
      });
    }

    return (
      <div className="ToDo">
        <br/>
        <h3> TO DO LIST </h3>
        <br/>
        {TodoItems_}


      </div>

    );
  }
}



export default Todo;
