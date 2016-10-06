import React from 'react';
import ReactDOM from 'react-dom';

const FakeComponent = () => (
  <div>
    <h1>My Fake Component</h1>
  </div>
);

ReactDOM.render(
  <FakeComponent />,
  document.getElementById('root')
);
