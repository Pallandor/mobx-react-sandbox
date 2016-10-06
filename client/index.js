import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from './components/HomePage';

ReactDOM.render(
  <HomePage count={5} />,
  document.getElementById('root')
);
