import React from 'react';
import ToDoListItem from './todo_list_item.jsx';
import ToDoForm from './todo_form.jsx';

class ToDoList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const todos = this.props.todos.map((todo) => {
      return (
        <ToDoListItem receiveToDo={this.props.receiveToDo} removeToDo={this.props.removeToDo} key={todo.id} todo={todo} />
      );
    });

    return(
      <div>
      <ul>
      {todos}
      </ul>
      <ToDoForm receiveToDo={this.props.receiveToDo} />
      </div>
    );
  }
}

export default ToDoList;
