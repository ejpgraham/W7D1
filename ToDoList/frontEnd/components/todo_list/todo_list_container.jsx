import React from 'react';
import { connect } from 'react-redux';
import ToDoList from './todo_list.jsx';
import allTodos from '../../reducers/selectors.js';
import { receiveToDo, receiveToDos, removeToDo } from '../../actions/actions.js';

const mapStateToProps = (state) => {
  return {todos: allTodos(state)};
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveToDo: (todo) => ( dispatch(receiveToDo(todo))),
    removeToDo: (todo) => ( dispatch(removeToDo(todo))),
    fetchToDos: () => ( dispatch(fetchToDos()))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
