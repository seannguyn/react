import { FETCH_TODO, NEW_TODO } from './types';
import axios from 'axios';

export function fetchTodo() {

  return async function(dispatch) {

    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');

    console.log(res.data,"hihi");

    dispatch({
      type: FETCH_TODO,
      payload: res.data
    })
  }
}

export function createTodo(todo) {

  return async function(dispatch) {

    await axios.post('https://jsonplaceholder.typicode.com/todos',todo);
    console.log(todo);
    dispatch({
      type: NEW_TODO,
      payload: todo
    })
  }
}
