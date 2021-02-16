import { useSelector } from 'react-redux';

import Rating from './Rating';
import ReviewForm from './ReviewForm';

const Review = ({ showId }) => {
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
                <Rating rating={review.rating} />
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
