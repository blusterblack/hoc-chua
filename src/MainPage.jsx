import React, { useState } from 'react';
import course from '../courses.json';
import CourseList from './CourseList';
import { difficulty, area } from '../category.json';

export default function MainPage() {
  const [search, setSearch] = useState('');
  return (
    <div>
      {search}
      <input type="text" value={search} onChange={(event) => { setSearch(event.target.value); }} />
      <CourseList courses={course} filters={[]} />
    </div>
  );
}
