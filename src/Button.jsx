import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ name, isActive, callback }) {
  const [isLow, setIsLow] = useState(true);
  return (
    <button
      type="button"
      className={isLow ? 'low-opacity' : ''}
      onClick={() => {
        setIsLow(!isLow);
        callback(name);
      }}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Button;
