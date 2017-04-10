import React from 'react';

class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const todos = props.todos.map((todo, idx) => {
      return (
        <li key={idx}>
          {todo.title}
        </li>
      );
  });
  }
}
