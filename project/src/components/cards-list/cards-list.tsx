import {MovieType} from '../../types/movie';
import Card from '../card/card';
import {useState} from 'react';

type CardListProps = {
  movies: MovieType[]
}

function CardsList({movies}: CardListProps) {
  const [activeCard, setActiveCard] = useState<MovieType | null>(null);

  const handleCardEnter = (movie: MovieType) => setActiveCard(movie);
  const handleCardLeave = () => setActiveCard(null);

  return (
    <div className="catalog__films-list" style={{position: 'relative'}}>
      <p style={{
        position: 'absolute',
        color: 'white',
        top: -50,
      }}
      >{activeCard?.name}
      </p>
      {
        movies.map((movie: MovieType) => (
          <Card
            key={movie.id}
            movie={movie}
            onCardEnter={handleCardEnter}
            onCardLeave={handleCardLeave}
          />
        ))
      }
    </div>
  );
}

export default CardsList;
