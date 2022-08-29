import React from 'react';
import {ReviewType} from '../../types/review';
import Review from '../review/review';

type ReviewsListProps = {
  reviews: ReviewType[]
}

function ReviewsList({reviews}: ReviewsListProps) {
  const halfReviewsLength = Math.ceil(reviews.length / 2);
  const firstHalf = reviews.slice(0, halfReviewsLength);
  const secondHalf = reviews.slice(halfReviewsLength);

  return (
    <>
      <div className="film-card__reviews-col">
        {firstHalf.map((review: ReviewType) => <Review key={review.id} review={review}/>)}
      </div>
      <div className="film-card__reviews-col">
        {secondHalf.map((review: ReviewType) => <Review key={review.id} review={review}/>)}
      </div>
    </>
  );
}

export default ReviewsList;
