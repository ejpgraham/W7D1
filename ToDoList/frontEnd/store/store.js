import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import thunkMiddleWare from '../middleware/thunk.js';
import { applyMiddleware } from 'redux';

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunkMiddleWare));
};

export default configureStore;
