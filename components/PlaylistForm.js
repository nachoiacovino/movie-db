import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { addPlaylist } from '../actions';

const ReviewForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    dispatch(addPlaylist(data.name));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col space-y-1.5 md:w-96 border-gray-300 border-t-0 border p-3 bg-blue-200'
    >
      <input
        className='border border-gray-200 p-2 rounded-md'
        type='text'
        name='name'
        id='name'
        ref={register({ required: true })}
        required
        placeholder='Playlist name'
      />
      <button
        className='p-2 rounded-lg mt-2 bg-black font-semibold text-white hover:bg-gray-900'
        type='submit'
      >
        Add
      </button>
      <p class='text-xs flex justify-center'>My favorite color is blue</p>
    </form>
  );
};

export default ReviewForm;
