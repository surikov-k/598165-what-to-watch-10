import {MovieType} from '../../types/movie';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type CardProps = {
  movie: MovieType
  onCardEnter: (movie: MovieType) => void,
  onCardLeave: () => void
}

const Card = ({movie, onCardEnter, onCardLeave}: CardProps) => {
  const {id, name, previewImage} = movie;
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => onCardEnter(movie)}
      onMouseLeave={onCardLeave}
    >
      <Link to={AppRoute.Movie.replace(/:id/, String(id))}>
        <div className="small-film-card__image">
          <img
            src={previewImage}
            alt={name} width="280" height="175"
          />
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={AppRoute.Movie.replace(/:id/, String(id))}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
};

export default Card;
