import React from 'react';
import PropTypes from 'prop-types';

// Task component - represents a single todo item
const Task = ({ task, onClick }) => <li><button onClick={onClick}>{task.text}</button></li>;


Task.defaultProps = {
  task: {
    text: '',
  },
  onClick: () => { },
};

Task.propTypes = {
  task: PropTypes.shape({ text: PropTypes.string }),
  onClick: PropTypes.func,
};

export default Task;
