import React, { Component } from 'react';

import TodoView from '../TodoView';

@observer
class TodoList extends Component {
  constructor() {
    super();
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo() {
    this.props.store.addTodo(prompt('Enter a new todo', 'coffee plz!'));
  }

  render() {
    const store = this.props.store;
    return (
      <div>
        {store.report}
        <ul>{store.todos.map((todo, idx) => <TodoView todo={todo} key={idx} />)}</ul>
        {store.pendingRequests ? <marquee>Loading...</marquee> : null}
        <button onClick={this.handleAddTodo}>New Todo</button>
        <small> (double-click a todo to edit)</small>
      </div>
    );
  }
}

TodoList.propTypes = {
  store: React.PropTypes.any,
};

export default TodoList;
