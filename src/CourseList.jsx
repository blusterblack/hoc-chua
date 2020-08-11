import React from 'react';
import PropTypes from 'prop-types';
import Course from './Course';

function CourseList({ courses, filters }) {
  const filteredCoursed = courses.filter((x) => filters.every((f) => f(x)));
  const coursesList = filteredCoursed.map((x) => <Course key={x.Code} info={x} />);
  return <div className="course-list">{coursesList}</div>;
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.arrayOf(PropTypes.func).isRequired,
};

export default CourseList;
