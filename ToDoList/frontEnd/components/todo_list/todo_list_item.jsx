import React from 'react';

class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove () {
    store.dispatch(this.props.removeToDo(this.props.todo.id));
  }

  handleToggle () {
    // debugger
    const state = this.props.todo.done ? false : true ;
    this.props.todo.done = state;
    store.dispatch(this.props.receiveToDo(this.props.todo));
  }


  render () {
    const butt = this.props.todo.done ? "mark done" : "mark undone" ;
    return (
      <li>
        {this.props.todo.title}
        <button onClick={this.handleRemove}>Delete</button>
        <button onClick={this.handleToggle}>{butt}</button>
      </li>
    );
  }
}

export default ToDoListItem;
