import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { END } from 'redux-saga';

import { searchData } from '../actions';
import { wrapper } from '../store';

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchData('harry potter'));
  }, [dispatch]);

  return <div></div>;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (!store.getState().data) {
    store.dispatch(searchData('harry potter'));
    store.dispatch(END);
  }

  await store.sagaTask.toPromise();
});

export default Index;
