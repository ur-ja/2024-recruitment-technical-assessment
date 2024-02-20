import React from 'react';
import {
  BookOpenIcon,
  ShieldCheckIcon,
  UserCircleIcon,
  MoonIcon,
  ArrowRightEndOnRectangleIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  BarsArrowRightIcon,
} from '@heroicons/react/24/outline';

function NavBar() {
  return (
    <div className='bg-[#F9FAFB] py-6 w-24 flex flex-col items-center p-3'>
      <img
        src='/assets/unilectives.svg'
        alt='Unilectives Logo'
        className='h-8 w-10'
      />
      <hr className='w-full border border-gray-200 mt-4' />
      <div className='flex flex-col justify-between h-full'>
        <div>
          <BookOpenIcon className='h-6 w-6 mt-4' />
          <ShieldCheckIcon className='h-6 w-6 mt-8' />
        </div>

        <div className='mt-auto'>
          <BarsArrowUpIcon className='h-6 w-6 rotate-90' />
          <UserCircleIcon className='h-6 w-6 mt-8' />
          <MoonIcon className='h-6 w-6 mt-8' />
          <ArrowRightEndOnRectangleIcon className='h-6 w-6 mt-8 mb-8' />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
