import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPlaylist } from '../../actions';
import Card from '../../components/Card';

const PlaylistDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { slug } = router.query;
  const playlist = useSelector((state) =>
    state.playlists.find((playlist) => playlist.id === slug),
  );
  const fetchedPlaylist = useSelector((state) => state.fetchedPlaylist);
  /*   const [playlistShows, setPlaylistShows] = useState(playlist.shows); */

  useEffect(() => {
    console.log(playlist);
    dispatch(fetchPlaylist(playlist));
  }, [playlist, dispatch]);

  if (!fetchedPlaylist) return null;

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4'>
      <h1 className='text-4xl font-bold'>{fetchedPlaylist.name}</h1>
      <div className='grid max-w-lg gap-5 mx-auto mt-8 md:grid-cols-3 lg:grid-cols-5 lg:max-w-none mb-6'>
        {fetchedPlaylist.shows?.map((show) => (
          <Card key={show.imdbID} show={show} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistDetail;
