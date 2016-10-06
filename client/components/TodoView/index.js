// for stub purposes
import React, { Component } from 'react';

class TodoView extends Component {
  constructor(){
    super();
    this.handleTodoRename = this.handleTodoRename.bind(this);
    this.toggleTodoCompleted = this.toggleTodoCompleted.bind(this);
  }

  handleTodoRename(){
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || todo.task;
  }

  toggleTodoCompleted(){
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  render() {
    const todo = this.props.todo;
    return (
      <li onDoubleClick={this.handleTodoRename}>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={this.toggleTodoCompleted}
        />
        {todo.task}
        {todo.assignee ? <small>{todo.assignee.name}</small> : null}
      </li>
    );
}

TodoView.propTypes = {
  todo: React.PropTypes.object, // NOTE: Change this, too lax! or back to .any
};

export default TodoView;
