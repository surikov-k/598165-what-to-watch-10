import Main from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Movie from '../../pages/movie/movie';
import Review from '../../pages/review/review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoot from '../private-root/private-root';
import {MovieType} from '../../types/movie';
import {ReviewType} from '../../types/review';

type AppProps = {
  movies: MovieType[],
  reviews: ReviewType[]
}

function App({movies, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <Main
              feature={movies[Math.round(Math.random() * movies.length)]}
              movies={movies}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoot status={AuthorizationStatus.Auth}>
              <MyList movies={movies}/>
            </PrivateRoot>
          }
        />
        <Route
          path={AppRoute.Movie}
          element={
            <Movie
              movie={movies[Math.round(Math.random() * movies.length)]}
              similar={movies.slice(0 ,4)}
              reviews={reviews}
            />
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={<Review movie={movies[Math.round(Math.random() * movies.length)]}/>}
        />
        <Route
          path={AppRoute.Player}
          element={<Player/>}
        />
        <Route
          path="*"
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
