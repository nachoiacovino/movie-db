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
  }, [dispatch]);

  return <div>{show?.Title}</div>;
};

export default ShowDetail;
