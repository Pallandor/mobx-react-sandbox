import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import observableStore from './store';
import peopleStoreFactory from './store/people';

const peopleStore = new peopleStoreFactory();
const store = new observableStore();

/** Prepopulate with todos **/
store.todos[0] = {
  task: 'Default todo',
  completed: false,
  assignee: peopleStore.persons[0],
};
/** Additional mutation **/
peopleStore.persons[0].name = 'Roger Yoyo';

ReactDOM.render(
  <TodoList store={store} />,
  document.getElementById('root')
);
