import React, {ReactNode} from 'react';
import {MovieType} from '../../types/movie';
import CardsList from '../../components/cards-list/cards-list';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Header from '../../components/header/header';
import {ReviewType} from '../../types/review';
import ReviewsList from '../../components/reviews-list/reviews-list';

type MovieProps = {
  movie: MovieType,
  similar: MovieType[],
  reviews: ReviewType[]
}

const Movie = ({movie, similar, reviews}: MovieProps) => {
  const
    {
      backgroundColor,
      backgroundImage,
      description,
      director,
      genre,
      id,
      isFavorite,
      name,
      posterImage,
      rating,
      released,
      runTime,
      scoresCount,
      starring,
    } = movie;

  enum Rating {
    Bad = 'Bad',
    Normal = 'Normal',
    Good = 'Good',
    VeryGood = 'Very good',
    Awesome = 'Awesome',
  }

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

  const joinWithLineBreaks = (array: string[]): ReactNode[] => array
    .reduce((acc, star) => acc
      .concat(star)
      .concat(',')
      .concat(<br key={star}/>), [] as ReactNode[])
    .slice(0, -2);

  const formatRunTime = (time: number) => `${Math.floor(time / 60)}h ${String(time % 60).padStart(2, '0')}m`;
  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header filmCard/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={AppRoute.Player.replace(':id', String(id))}
                  className="btn btn--play film-card__button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  {
                    isFavorite ?
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg> :
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#in-list"></use>
                      </svg>
                  }
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link
                  to={AppRoute.AddReview.replace(/:id/, String(id))}
                  className="btn film-card__button"
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={posterImage} alt="The Grand Budapest Hotel poster" width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <span className="film-nav__link">Overview</span>
                  </li>
                  <li className="film-nav__item">
                    <span className="film-nav__link">Details</span>
                  </li>
                  <li className="film-nav__item">
                    <span className="film-nav__link">Reviews</span>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{describeRating(rating)}</span>
                  <span className="film-rating__count">{scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{description}</p>

                <p className="film-card__director"><strong>Director: {director}</strong></p>

                <p className="film-card__starring">
                  <strong>Starring: {starring.join(', ')}</strong>
                </p>
              </div>

              <div className="film-card__text film-card__row">
                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Director</strong>
                    <span className="film-card__details-value">{director}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Starring</strong>
                    <span className="film-card__details-value">
                      {joinWithLineBreaks(starring)}
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

              <ReviewsList reviews={reviews}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <CardsList movies={similar}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>

    </>
  );
};

export default Movie;
