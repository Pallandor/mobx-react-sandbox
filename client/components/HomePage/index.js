import React from 'react';

const HomePage = ({ count }) => (
  <div>
    <p>Counter: {count}</p>
    <button onClick={() => {}}> + </button>
    <button onClick={() => {}}> - </button>
  </div>
);

HomePage.propTypes = {
  count: React.PropTypes.number,
};

export default HomePage;
