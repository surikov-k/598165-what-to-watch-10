import {MovieType} from '../../types/movie';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import VideoPlayer from '../video-player/video-player';

const PREVIEW_WIDTH = 280;
const PREVIEW_HEIGHT = 175;

type CardProps = {
  movie: MovieType
  handleCardEnter: (movie: MovieType) => void,
  handleCardLeave: () => void,
  isVideoPlaying: boolean
}

const Card = ({movie, handleCardEnter, handleCardLeave, isVideoPlaying}: CardProps) => {
  const {id, name} = movie;
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => handleCardEnter(movie)}
      onMouseLeave={handleCardLeave}
    >
      <Link to={AppRoute.Movie.replace(/:id/, String(id))}>
        <div className="small-film-card__image">
          <VideoPlayer
            movie={movie}
            isPlaying={isVideoPlaying}
            width={PREVIEW_WIDTH}
            height={PREVIEW_HEIGHT}
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
