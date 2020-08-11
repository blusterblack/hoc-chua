import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ name, isActive, callback }) {
  return (
    <button type="button" className={isActive ? '' : 'low-opacity'} onClick={() => { callback(name); }}>
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
