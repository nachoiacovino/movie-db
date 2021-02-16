import { useDispatch, useSelector } from 'react-redux';

import { addPlaylist } from '../actions';

const playlists = () => {
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.playlists);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4'>
      <h1 className='text-3xl font-semibold'>My playlists</h1>
      <button onClick={() => dispatch(addPlaylist('test'))}>
        Add playlist
      </button>
      <div>
        {playlists.length > 0 && (
          <ul>
            {playlists.map((playlist) => (
              <li>{playlist.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default playlists;
