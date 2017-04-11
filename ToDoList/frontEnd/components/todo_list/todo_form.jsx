import React from 'react';

class ToDoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: ''};
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  uniqueId () {
    return new Date().getTime();
  }

  handleInput (e) {
    this.setState({title : e.currentTarget.value, id: this.uniqueId()});
  }

  handleSubmit(e){
    e.preventDefault();
    store.dispatch(this.props.receiveToDo(this.state));
  }

  render(){
    return(
    <form onSubmit={this.handleSubmit.bind(this)}>
      <input type='text' value={this.state.title} onChange={ this.handleInput.bind(this) }></input>
      <input type="submit" />
     </form>
   );
  }
}

export default ToDoForm;
