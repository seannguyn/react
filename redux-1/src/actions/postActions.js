import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export function fetchPosts() {
  return async function(dispatch) {

    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

    // console.log("all data: ",res.data);

    dispatch({
      type: FETCH_POSTS,
      payload: res.data})
  }
};

export function createPost (postData) {
  return async function(dispatch) {

    axios.post('https://jsonplaceholder.typicode.com/posts',postData)

    dispatch({
      type: NEW_POST,
      payload: postData
    })


  }
};
