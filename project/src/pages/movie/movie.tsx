import {MovieType} from '../../types/movie';
import CardsList from '../../components/cards-list/cards-list';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Header from '../../components/header/header';
import {ReviewType} from '../../types/review';
import MovieDescription from '../../components/movie-description/movie-description';

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
      genre,
      id,
      isFavorite,
      name,
      posterImage,
      released,
    } = movie;

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

            <MovieDescription
              movie={movie}
              reviews={reviews}
            />

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
