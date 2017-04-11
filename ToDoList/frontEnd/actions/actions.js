export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import APIUtil from '../util/todo_api_util.js';

export const receiveToDos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  };
};

export const removeToDo = (id) => {
  return {
    type: REMOVE_TODO,
    id: id
  };
};

export const receiveToDo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo: todo
  };
};

export const fetchToDos = () => {
  return (dispatch) => {
     return APIUtil().then( (todos) => {
       dispatch(receiveToDos(todos));
     });
  };
};

window.fetchToDos = fetchToDos;
