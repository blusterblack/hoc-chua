/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import course from '../courses.json';
import CourseList from './CourseList';
import { rawDifficulty, rawArea } from '../category.json';
import ButtonList from './ButtonList';

export default function MainPage() {
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState(rawDifficulty
    .map((x) => ({ name: x, isActive: false })));
  const [area, setArea] = useState(rawArea
    .map((x) => ({ name: x, isActive: false })));
  const [filters, setFilters] = useState([]);
  const createFilter = () => {
    const activeDifficulty = [];
    difficulty.forEach((x, i) => { if (x.isActive === true) activeDifficulty.push(i); });
    const cond1 = activeDifficulty.length === 0
      ? () => true
      : (x) => activeDifficulty.includes(parseInt(x.Code[2], 10));

    const activeArea = [];
    area.forEach((x, i) => { if (x.isActive === true) activeArea.push(i); });
    const cond2 = activeArea.length === 0
      ? () => true
      : (x) => activeArea.includes(parseInt(x.Code[3], 10));
    const cond3 = (x) => (
      x.Name.toLowerCase().includes(search.toLowerCase())
    || x.Desc.toLowerCase().includes(search.toLowerCase()));
    return [cond1, cond2, cond3];
  };
  return (
    <div>
      <ButtonList
        itemList={difficulty}
        callback={(name) => {
          difficulty.forEach((x) => { if (x.name === name) { x.isActive = !x.isActive; } });
          setDifficulty(difficulty);
          setFilters(createFilter());
        }}
      />
      <ButtonList
        itemList={area}
        callback={(name) => {
          area.forEach((x) => { if (x.name === name) { x.isActive = !x.isActive; } });
          setArea(area);
          setFilters(createFilter());
        }}
      />
      <input
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value); setFilters(createFilter());
        }}
      />
      <CourseList courses={course} filters={filters} />
    </div>
  );
}
