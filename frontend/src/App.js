import React, { useState } from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import SortBy from './components/SortBy';
import Card from './components/Card';
import courseData from './data/courses.json';

function App() {
  const [titleColor, setTitleColor] = useState('#1479F2');

  const handleTitleClick = () => {
    const newColor = titleColor === '#1479F2' ? '#B789E5' : '#1479F2';
    setTitleColor(newColor);
  };

  return (
    <div className='flex align-middle h-[100vh]'>
      <NavBar className='' />
      <section className='flex flex-col align-middle h-full w-full px-32 py-6'>
        <span className='mb-10'>
          <p className='mb-3'>Devsoc presents</p>
          <h1
            className='text-6xl font-extrabold pb-2 cursor-pointer'
            style={{ color: titleColor }}
            onClick={handleTitleClick}
          >
            unilectives
          </h1>
          <p className='font-extrabold'>
            Your one-stop shop for UNSW course and elective reviews.
          </p>
        </span>
        <SearchBar />
        <SortBy />
        <div className='grid grid-cols-3 gap-10'>
          {courseData.map((course, index) => (
            <Card key={index} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
