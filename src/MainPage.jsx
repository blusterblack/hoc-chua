import React, { useState } from 'react';
import course from '../courses.json';
import CourseList from './CourseList';
import { rawDifficulty, rawArea } from '../category.json';
import ButtonList from './ButtonList';

export default function MainPage() {
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState(rawDifficulty
    .map((x) => ({ name: x, isActive: false })));
  console.log(difficulty);
  return (
    <div>
      Difficulty:
      <ButtonList itemList={difficulty} callback={(name) => {}} />
      <input type="text" value={search} onChange={(event) => { setSearch(event.target.value); }} />
      <CourseList courses={course} filters={[]} />
    </div>
  );
}
