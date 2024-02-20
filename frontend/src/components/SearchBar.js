import React, { useState } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

function SearchBar() {
  const [isDivVisible, setIsDivVisible] = useState(false);

  const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };

  return (
    <div>
      <div
        className='flex border-2 w-full h-10 border-[#9CADE9] rounded-md px-2 items-center cursor-pointer'
        onClick={toggleDivVisibility}
      >
        <MagnifyingGlassIcon className='h-6 w-6 text-[#9CADE9] mr-5' />
        <p className='text-[#9CADE9] text-sm'>
          Search for a course e.g. COMP1511
        </p>
      </div>
      {isDivVisible && (
        <div className='fixed inset-0 flex justify-center items-center z-50'>
          <div className='bg-white border-black border-2 p-4 relative'>
            <XMarkIcon
              className='h-6 w-6 hover:cursor-pointer hover:text-[#1479F2] absolute top-0 right-0 m-2'
              onClick={toggleDivVisibility}
            />
            <p className='m-5'>This is the div.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
