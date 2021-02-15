import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../components/Card';
import Search from '../components/Search';

/* import { END } from 'redux-saga';
import { wrapper } from '../store'; */

const Index = () => {
  const searchResults = useSelector((state) => state.searchResults);
  console.log(searchResults);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex justify-center mt-6'>
        <Search />
      </div>
      <div className='grid max-w-lg gap-5 mx-auto mt-12 md:grid-cols-3 lg:grid-cols-5 lg:max-w-none'>
        {searchResults?.map((show) => (
          <Card key={show.imdbID} show={show} />
        ))}
      </div>
    </div>
  );
};

/* export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (!store.getState()?.searchResults) {
    store.dispatch(searchData(''));
    store.dispatch(END);
  }

  await store.sagaTask.toPromise();
}); */

export default Index;
