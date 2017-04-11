import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import allTodos from './reducers/selectors.js';
import { receiveToDos, receiveToDo } from './actions/actions.js';
import Root from './components/root.jsx';

const store = configureStore();
window.store = store;
window.receiveToDos = receiveToDos;
window.receiveToDo = receiveToDo;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={ store }/>, document.getElementById('content'));
});
