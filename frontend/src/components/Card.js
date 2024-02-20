import React from 'react';
import ReactStars from 'react-rating-stars-component';

function Card({ course }) {
  const {
    course_prefix,
    course_code,
    course_title,
    average_stars,
    total_reviews,
    offered_terms,
  } = course;

  return (
    <div className='p-4 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <span className='flex justify-between items-start'>
        <h2 className='text-xl font-extrabold'>
          {course_prefix}
          {course_code}
        </h2>
        <div>
          <ReactStars
            count={5}
            value={average_stars}
            size={24}
            activeColor='#B789E5'
            edit={false}
          />
          <p className='text-xs text-slate-400'>{total_reviews} reviews</p>
        </div>
      </span>
      <p className='mt-2 mb-9 text-sm'>{course_title}</p>
      <div className='flex flex-wrap'>
        {offered_terms.map((term, index) => (
          <span
            key={index}
            className='rounded-full bg-[#CCEBF6] px-2 py-1 mr-2 mb-2 text-xs'
          >
            {term}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
