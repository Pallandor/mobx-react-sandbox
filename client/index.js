import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import observableStore from './store';

const store = new observableStore();

ReactDOM.render(
  <TodoList store={store} />,
  document.getElementById('root')
);
