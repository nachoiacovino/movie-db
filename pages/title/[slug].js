/* import Image from 'next/image'; */
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addShowToPlaylist, deleteShowFromPlaylist, fetchShow } from '../../actions';

const ShowDetail = () => {
  const [showAdd, setShowAdd] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.playlists);
  const show = useSelector((state) => state.fetchedShow);
  const { slug } = router.query;

  const handleAddDelete = (playlist, showId) => {
    console.log(playlist.shows);
    console.log(showId);
    console.log(playlist.shows.includes(showId));
    if (!playlist.shows.includes(showId)) {
      dispatch(
        addShowToPlaylist({
          playlistId: playlist.id,
          showId,
        }),
      );
    } else {
      dispatch(
        deleteShowFromPlaylist({
          playlistId: playlist.id,
          showId,
        }),
      );
    }
  };

  useEffect(() => {
    dispatch(fetchShow(slug));
  }, [slug, dispatch]);

  if (!show) return null;

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 flex flex-col md:flex-row'>
      <img
        layout='fill'
        className='object-cover h-3/6 md:h-96'
        src={show.Poster !== 'N/A' ? show.Poster : '/assets/no-image.png'}
        alt={show.Title}
      />
      <div className='p-1 md:pl-4'>
        <div className='flex items-center mb-1 mt-3 md:flex-col md:justify-center md:items-start'>
          <p className='text-2xl font-semibold'>{show.Title}</p>
          <div className='flex space-x-1 items-center md:pt-1.5'>
            <svg
              className='w-6 h-6 fill-current text-yellow-400'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
              />
            </svg>
            <span className='text-lg font-semibold '>{show.imdbRating}</span>
          </div>
        </div>
        <p>{show.Plot}</p>
        <ul className='flex space-x-2.5 mt-2 mb-4'>
          {show.Genre.split(',').map((genre) => (
            <li
              key={genre}
              className='list-none p-1.5 border-gray-300 border rounded-xl'
            >
              {genre}
            </li>
          ))}
        </ul>
        <div className='mb-4 cursor-pointer md:w-96'>
          <button
            onClick={() => setShowAdd(!showAdd)}
            className={clsx(
              showAdd && 'border-b-0',
              'list-none border border-gray-300 p-3 flex justify-between w-full',
            )}
          >
            <span>Add show to playlist</span>
            <svg
              className='w-7 h-7'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={showAdd ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
              />
            </svg>
          </button>
          {showAdd && (
            <ul className='mb-4'>
              {playlists.map((playlist) => (
                <li
                  key={playlist.id}
                  className='list-none border border-gray-300 p-3 flex justify-between border-b-0 md:w-96'
                  onClick={() => handleAddDelete(playlist, show.imdbID)}
                >
                  <span>{playlist.name}</span>
                  <svg
                    className='w-7 h-7'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d={
                        !playlist.shows.includes(show.imdbID)
                          ? 'M12 6v6m0 0v6m0-6h6m-6 0H6'
                          : 'M5 13l4 4L19 7'
                      }
                    />
                  </svg>
                </li>
              ))}
              <Link href='/playlists'>
                <li className='list-none border border-gray-300 p-3 flex justify-between md:w-96'>
                  <span>Create new playlist</span>
                  <svg
                    className='w-7 h-7'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
