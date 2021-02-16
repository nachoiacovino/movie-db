import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex px-2 lg:px-0'>
            <Link href='/'>
              <div className='flex-shrink-0 flex items-center cursor-pointer'>
                <img
                  className='block lg:hidden h-8 w-auto'
                  src='/assets/logo.png'
                  alt='Movie DB'
                  width={40}
                  height={40}
                />
                <img
                  className='hidden lg:block h-8 w-auto'
                  src='/assets/logo-full.png'
                  alt='Movie DB'
                  height={60}
                />
              </div>
            </Link>
            <div className='flex-1 flex items-center justify-center px-2 w-64 ml-2 lg:ml-6 lg:justify-start lg:w-96 '>
              <div className='max-w-lg w-full lg:max-w-xs'>
                <label htmlFor='search' className='sr-only'>
                  Search
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    {/* Heroicon name: solid/search */}
                    <svg
                      className='h-5 w-5 text-gray-400'
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
                    className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-black focus:border-black sm:text-sm'
                    placeholder='Search'
                    type='search'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
            {/* Current: "border-black text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
            <a
              href='#'
              className='border-black text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
            >
              Home
            </a>
            <Link href='/playlists'>
              <a className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                Playlists
              </a>
            </Link>
          </div>
          <div className='flex items-center lg:hidden'>
            {/* Mobile menu button */}
            <button
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black'
              aria-expanded='false'
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d={
                    isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/*
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  */}
      <div className={clsx(!isOpen && 'hidden', 'lg:hidden')}>
        <div className='pt-2 pb-3 space-y-1'>
          {/* Current: "bg-indigo-50 border-black text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
          <a
            href='#'
            className='bg-gray-100 border-black text-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
          >
            Home
          </a>
          <a
            href='#'
            className='border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
          >
            Playlists
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
