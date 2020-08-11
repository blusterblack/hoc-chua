import React from 'react';
import PropTypes from 'prop-types';

function Course({ info }) {
  const {
    Code, Unit, Name, Desc,
  } = info;
  return (
    <div className="course">
      <div>{Code}</div>
      <div>{Name}</div>
    </div>
  );
}

Course.propTypes = {
  info: PropTypes.shape({
    Code: PropTypes.string,
    Unit: PropTypes.string,
    Name: PropTypes.string,
    Des: PropTypes.string,
  }).isRequired,
};

export default Course;
