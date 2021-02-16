import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deletePlaylist } from '../actions';
import PlaylistForm from '../components/PlaylistForm';

const playlists = () => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.playlists);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4'>
      <h1 className='text-3xl font-semibold mb-4'>My playlists</h1>
      <div>
        {playlists.length > 0 && (
          <ul>
            {playlists.map((playlist) => (
              <li
                key={playlist.id}
                className='list-none border border-gray-300 p-3 flex justify-between border-b-0 md:w-96'
              >
                <h3 className='hover:underline cursor-pointer'>
                  {playlist.name}
                </h3>
                <button onClick={() => dispatch(deletePlaylist(playlist.id))}>
                  <svg
                    className='w-5 h-5'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                    />
                  </svg>
                </button>
              </li>
            ))}
            <li
              className='list-none border border-gray-300 p-3 flex justify-between md:w-96 cursor-pointer hover:underline'
              onClick={() => setShowForm(!showForm)}
            >
              <h3>Add playlist</h3>
              <svg
                className='w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d={showForm ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                />
              </svg>
            </li>
            {showForm && <PlaylistForm />}
          </ul>
        )}
      </div>
    </div>
  );
};

export default playlists;
