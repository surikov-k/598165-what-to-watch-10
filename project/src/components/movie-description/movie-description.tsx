import cn from 'classnames';
import ReviewsList from '../reviews-list/reviews-list';
import React, {ReactNode, useState} from 'react';
import {MovieType} from '../../types/movie';
import {ReviewType} from '../../types/review';

import './movies-description.css';

type MovieTabsProps = {
  movie: MovieType,
  reviews: ReviewType[],
}

enum Rating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

function MovieDescription({movie, reviews}: MovieTabsProps) {

  const {
    description,
    director,
    genre,
    rating,
    released,
    runTime,
    scoresCount,
    starring,
  } = movie;

  const [activeTab, setActiveTab] = useState<Tab>(Tab.Overview);

  const tabClickHandler = (tab: string) => {
    setActiveTab(tab as Tab);
  };

  const describeRating = (value: number): Rating => {
    if (value < 3) {
      return Rating.Bad;
    }
    if (value < 5) {
      return Rating.Normal;
    }
    if (value < 8) {
      return Rating.Good;
    }
    if (value < 10) {
      return Rating.VeryGood;
    }
    return Rating.Awesome;
  };

  const wrapWithLineBreaks = (array: string[]): ReactNode[] => array
    .slice(0, -1)
    .reduce((acc: ReactNode[], line) => acc
      .concat(`${line},`)
      .concat(<br key={line}/>), [])
    .concat([...array].pop());

  const formatRunTime = (time: number) => `${Math.floor(time / 60)}h ${String(time % 60).padStart(2, '0')}m`;

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            Object.keys(Tab)
              .map((tab) => (
                <li
                  key={tab}
                  className={cn('film-nav__item', {
                    'film-nav__item--active': activeTab === tab
                  })}
                  onClick={() => tabClickHandler(tab)}
                >
                  <span
                    tabIndex={0}
                    className={cn('film-nav__link link', {
                      'active-link': activeTab === tab,
                    })}
                  >
                    {tab}
                  </span>
                </li>
              ))
          }
        </ul>
      </nav>

      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{describeRating(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div
        className={cn('film-card__text', {
          'hidden': activeTab !== Tab.Overview
        })}
      >
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {starring.join(', ')}</strong>
        </p>
      </div>

      <div
        className={cn('film-card__text film-card__row', {
          'hidden': activeTab !== Tab.Details
        })}
      >
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {wrapWithLineBreaks(starring)}
            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{formatRunTime(runTime)}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{released}</span>
          </p>
        </div>
      </div>

      <div
        className={cn('film-card__reviews film-card__row', {
          'hidden': activeTab !== Tab.Reviews
        })}
      >
        <ReviewsList reviews={reviews}/>
      </div>
    </div>
  );
}

export default MovieDescription;
