import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { addReview } from '../actions';

const ReviewForm = ({ showId }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    dispatch(addReview({ ...data, showId }));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col space-y-1.5 md:w-6/12'
    >
      <h5 className='font-semibold text-lg my-2 '>Add a review</h5>
      <input
        className='border border-gray-200 p-2 rounded-md'
        type='text'
        name='author'
        id='author'
        ref={register({ required: true })}
        required
        placeholder='Author'
      />
      <input
        className='border border-gray-200 p-2 rounded-md'
        type='number'
        name='rating'
        id='rating'
        ref={register({ required: true })}
        required
        max={10}
        placeholder='Rating'
      />
      <input
        className='border border-gray-200 p-2 rounded-md'
        type='text'
        name='title'
        id='title'
        ref={register({ required: true })}
        required
        placeholder='Title'
      />
      <textarea
        className='border border-gray-200 p-2 rounded-md'
        rows={4}
        cols={10}
        name='text'
        id='text'
        ref={register({ required: true })}
        required
        placeholder='Text'
      />
      <button
        className='p-2 rounded-lg mt-2 bg-black font-semibold text-white hover:bg-gray-900'
        type='submit'
      >
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
