import { useDispatch, useSelector } from 'react-redux';

import { addPlaylist } from '../actions';

const playlists = () => {
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.playlists);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 flex flex-col md:flex-row'>
      <h1 className='text-3xl font-semibold'>My playlists</h1>
      <button onClick={() => dispatch(addPlaylist('test'))}>
        Add playlist
      </button>
    </div>
  );
};

export default playlists;
