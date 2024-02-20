import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function SortBy() {
  return (
    <div className='flex items-center justify-between border w-52 h-10 border-slate-400 rounded-md mt-3 mb-10 px-4'>
      <p className='text-slate-400'>Sort by</p>
      <ChevronDownIcon className='text-slate-400 h-4 w-4 my-1' />
    </div>
  );
}

export default SortBy;
