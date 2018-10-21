import { combineReducers } from 'redux';
import PostReducers from './PostReducers';

export default combineReducers({
  posts: PostReducers,
});
