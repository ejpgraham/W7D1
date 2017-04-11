import { combineReducers } from 'redux';
import toDosReducer from './todos_reducer.js';

const rootReducer = combineReducers({
  todos: toDosReducer
});

export default rootReducer;
