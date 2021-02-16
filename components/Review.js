import { useDispatch, useSelector } from 'react-redux';

import { deleteReview } from '../actions';
import Rating from './Rating';
import ReviewForm from './ReviewForm';

const Review = ({ showId }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) =>
    state.reviews.filter((review) => review.showId === showId),
  );

  return (
    <div className='mb-4'>
      <h3 className='text-3xl font-semibold mb-3 md:mt-4'>Reviews</h3>
      <div className='space-y-4 md:w-6/12'>
        {reviews.length > 0
          ? reviews.map((review) => (
              <div key={review.id} className='bg-gray-100 p-4'>
                <div className='flex justify-between'>
                  <Rating rating={review.rating} />
                  <button onClick={() => dispatch(deleteReview(review.id))}>
                    <svg
                      className='w-7 h-7'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                      />
                    </svg>
                  </button>
                </div>
                <div className='-space-y-1.5 mb-2'>
                  <h4 className='text-lg font-semibold'>{review.title}</h4>
                  <h6 className='text-sm'>Posted by {review.author}</h6>
                </div>
                <p>{review.text}</p>
              </div>
            ))
          : 'There are no reviews yet, be the first to add one!'}
      </div>
      <ReviewForm showId={showId} />
    </div>
  );
};

export default Review;
