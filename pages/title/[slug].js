import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchShow } from '../../actions';

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
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4'>
      <Image
        width={400}
        height={600}
        className='object-cover h-48'
        src={show.Poster !== 'N/A' ? show.Poster : '/assets/no-image.png'}
        alt={show.Title}
      />
      <div>{show.Title}</div>
    </div>
  );
};

export default ShowDetail;
