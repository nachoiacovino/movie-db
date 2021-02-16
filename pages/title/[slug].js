/* import Image from 'next/image'; */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addShowToPlaylist, fetchShow } from '../../actions';

const ShowDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const show = useSelector((state) => state.fetchedShow);
  const { slug } = router.query;

  console.log(slug);

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
            <li className='list-none p-1.5 border-gray-300 border rounded-xl'>
              {genre}
            </li>
          ))}
        </ul>
        <button
          onClick={() =>
            dispatch(
              addShowToPlaylist({
                playlistId: '4c133dba-3253-4425-90dc-8bbb0e6a0e0e',
                showId: show.imdbID,
              }),
            )
          }
        >
          Add show to playlist
        </button>
      </div>
    </div>
  );
};

export default ShowDetail;
