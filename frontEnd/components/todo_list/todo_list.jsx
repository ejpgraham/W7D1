import React from 'react';

const ToDoList = (props) => {
  const todos = props.todos.map((todo, idx) => {
    return (
      <li key={idx}>
      {todo.title}
      </li>
    );
  });

  return(
    <ul>
    {todos}
    </ul>
  );
};

export default ToDoList;
