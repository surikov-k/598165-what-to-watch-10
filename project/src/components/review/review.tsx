import React from 'react';
import {ReviewType} from '../../types/review';

type ReviewProps = {
  review: ReviewType,
}

function Review({review}: ReviewProps) {
  const {
    comment,
    rating,
    date,
    user,
  } = review;

  const formatDate = (d: string) => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    return formatter.format(new Date(d));
  };

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p
          className="review__text"
        >{comment}
        </p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={new Date(date).toISOString()}>{formatDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
