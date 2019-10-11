import PropTypes from 'prop-types';
import React from 'react';

export default function Task({ task: { id, title, state }, onArchieveTask, onPinTask }) {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }),
  onPinTask: PropTypes.func,
  onArchieveTask: PropTypes.func
};
