import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class TodoView extends Component {
  constructor() {
    super();
    this.handleTodoRename = this.handleTodoRename.bind(this);
    this.toggleTodoCompleted = this.toggleTodoCompleted.bind(this);
  }

  handleTodoRename() {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || todo.task;
  }

  toggleTodoCompleted() {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  render() {
    const todo = this.props.todo;
    return (
      <li onDoubleClick={this.handleTodoRename}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={this.toggleTodoCompleted}
        />
        {todo.task}
        {todo.assignee ? <small>{todo.assignee.name}</small> : null}
      </li>
    );
  }
}

TodoView.propTypes = {
  todo: React.PropTypes.shape({
    task: React.PropTypes.string,
    completed: React.PropTypes.bool,
    assignee: React.PropTypes.any,
  }).isRequired,
};

export default TodoView;
