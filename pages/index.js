import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchData } from '../actions';
import Card from '../components/Card';
import Search from '../components/Search';

const Index = () => {
  const searchResults = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchData('fast'));
  }, [dispatch]);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex justify-center mt-6 flex-col items-center space-y-5 text-center'>
        <h1 className='text-4xl font-bold'>Find you new favorite show</h1>
        <Search />
      </div>
      <div className='grid max-w-lg gap-5 mx-auto mt-8 md:grid-cols-3 lg:grid-cols-5 lg:max-w-none mb-6'>
        {searchResults?.map((show) => (
          <Card key={show.imdbID} show={show} />
        ))}
      </div>
    </div>
  );
};

export default Index;
