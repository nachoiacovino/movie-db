import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { searchData } from '../actions';

const Search = () => {
  const dispatch = useDispatch();

  const onSearchChange = (e) => dispatch(searchData(e.target.value));

  return (
    <div className='max-w-lg w-full lg:max-w-xs'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          {/* Heroicon name: solid/search */}
          <svg
            className='h-7 w-7 text-gray-400'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <input
          id='search'
          name='search'
          onChange={onSearchChange}
          className='block w-full pl-12 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-black focus:border-black text-2xl'
          placeholder='Search'
          type='search'
        />
      </div>
    </div>
  );
};

export default Search;
