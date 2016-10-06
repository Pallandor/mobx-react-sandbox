import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <TodoList store={observableTodoStore} />,
  document.getElementById('root')
);
