// for stub purposes
import React from 'react';

const TodoView  = ({ todo }) => (
  <div>
    <p>Todo: {todo}</p>
  </div>
);

TodoView.propTypes = {
  todo: React.PropTypes.any, // NOTE: Change this, too lax!
};

export default TodoView;
