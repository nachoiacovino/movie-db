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
          </div>

          <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
            <Link href='/'>
              <a className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                Home
              </a>
            </Link>
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
      <div className={clsx(!isOpen && 'hidden', 'lg:hidden')}>
        <div className='pt-2 pb-3 space-y-1'>
          <Link href='/'>
            <a className='border-black border-l-4 bg-gray-100 text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>
              Home
            </a>
          </Link>
          <Link href='/playlists'>
            <a className='border-black border-l-4 bg-gray-100 text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>
              Playlists
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
