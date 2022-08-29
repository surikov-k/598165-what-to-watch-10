import Header from '../../components/header/header';
import {MovieType} from '../../types/movie';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Fragment, useState} from 'react';

type ReviewProps = {
  movie: MovieType
}

const STAR_RATING_MAX = 10;

const Review = ({movie}: ReviewProps) => {
  const {
    id,
    name,
    backgroundImage,
    backgroundColor,
    posterImage
  } = movie;

  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  return (
    <section
      className="film-card film-card--full"
      style={{backgroundColor}}
    >
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={movie.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Movie.replace(/:id/, String(id))} className="breadcrumbs__link">
                  {name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={posterImage} alt={`${name} poster`} width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <form
          className="add-review__form"
          onSubmit={(evt) => {
            evt.preventDefault();
          }}
        >

          <div className="rating">
            <div className="rating__stars">
              {
                Array
                  .from({length: STAR_RATING_MAX})
                  .map((_ , i) => {
                    const stars = STAR_RATING_MAX - i;
                    return (
                      <Fragment key={stars}>
                        <input
                          className="rating__input"
                          id={`star-${stars}`}
                          type="radio"
                          name="rating"
                          value={stars}
                          checked={rating === stars}
                          onChange={() => setRating(stars)}
                        />
                        <label
                          className="rating__label"
                          htmlFor={`star-${stars}`}
                        >
                          Rating {stars}
                        </label>
                      </Fragment>

                    );
                  })
              }

            </div>
          </div>

          <div
            className="add-review__text"
            style={{backgroundColor: 'rgba(255, 255, 255, 0.3'}}
          >
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              onChange={(evt) => {
                setReviewText(evt.currentTarget.value);
              }}
              value={reviewText}
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
};

export default Review;
