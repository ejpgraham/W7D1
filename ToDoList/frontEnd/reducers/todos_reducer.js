import  { RECEIVE_TODOS } from "../actions/actions.js";
import  { RECEIVE_TODO } from "../actions/actions.js";
import { REMOVE_TODO } from "../actions/actions.js";
import allTodos from './selectors.js';


import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const toDosReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case RECEIVE_TODOS:
    // debugger
      let newState = {};
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case REMOVE_TODO:
      let removeNewState = merge({}, state);
      delete removeNewState[action.id];
      return removeNewState;

    case RECEIVE_TODO:
      return merge({}, state, {[action.todo.id]: action.todo});
      // using dynamic naming for action.todo.id, otherwise javascript
      // thinks we are using "action.todo.ud" as the key, brackets
      // prevent this.
    default:
      return state;
  }
};

export default toDosReducer;
//
// const newTodos = [{
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//    {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   },
// ];
