import React from 'react'
import { connect } from 'react-redux';
import {fetchTodo} from '../actions/todoActions'

class Todos extends React.Component {

  componentWillMount() {
    this.props.fetchTodo();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTodo) {
      this.props.todoList.unshift(nextProps.newTodo);
    }
  }

  render () {
    const todoItem = this.props.todoList.map((todo) => {
      return (
        <div key={todo.id} className="card card-body mb-3">
          <h4>{todo.title}</h4>
          <p>complete status: {todo.completed} {todo.completed === 'true' ?  <i className="fas fa-check" style={{color:'green'}}></i>
                                                          : <i className="fas fa-times" style={{color:'red'}}></i>}</p>
        </div>
      );
    })
    return (
      <div>
        <h1>To do List</h1>
        {todoItem}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todos.items,
  newTodo: state.todos.item
});

export default connect(mapStateToProps, {fetchTodo})(Todos);
