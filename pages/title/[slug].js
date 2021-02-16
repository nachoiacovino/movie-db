/* import Image from 'next/image'; */
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addShowToPlaylist, deleteShowFromPlaylist, fetchShow } from '../../actions';
import Rating from '../../components/Rating';
import Review from '../../components/Review';

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
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 '>
      <div className='flex flex-col md:flex-row'>
        <img
          layout='fill'
          className='object-cover h-3/6 md:h-96'
          src={show.Poster !== 'N/A' ? show.Poster : '/assets/no-image.png'}
          alt={show.Title}
        />
        <div className='p-1 md:pl-4'>
          <div className='flex items-center mb-1 mt-3 justify-between md:flex-col md:justify-center md:items-start'>
            <p className='text-2xl font-semibold'>{show.Title}</p>
            <Rating rating={show.imdbRating} />
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
      <Review showId={show.imdbID} />
    </div>
  );
};

export default ShowDetail;
