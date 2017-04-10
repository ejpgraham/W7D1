import React from 'react';
import { connect } from 'react-redux';
import ToDoList from './todo_list.jsx';
import allTodos from '../../reducers/selectors.js';
import { receiveToDo, receiveToDos } from '../../actions/actions.js';

const mapStateToProps = (state) => {
  return {todos: allTodos(state)};
};

const mapDispatchToProps = (dispatch) => {
  return {receiveToDo: (todo) => {
    return dispatch(receiveToDo(todo));
  }};
};
// debugger

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
