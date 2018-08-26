import { FETCH_TODO, NEW_TODO} from '../actions/types';

// contain initial and dispatch {type: action}

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODO:
      // const exist_todo = state.item;
      // let new_state;
      // new_state = {
      //   items: [...exist_todo,action.payload],
      //   item: {}
      // }
      // return new_state;
      return {
        ...state,
        items: action.payload
      };
    case NEW_TODO:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
