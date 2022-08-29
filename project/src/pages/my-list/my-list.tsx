import React from 'react';
import {MovieType} from '../../types/movie';
import CardsList from '../../components/cards-list/cards-list';
import Header from '../../components/header/header';

type MyListProps = {
  movies: MovieType[]
}

const MyList = ({movies}: MyListProps) => (
  <div className="user-page">
    <Header userPage>
      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{movies.length}</span></h1>
    </Header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CardsList movies={movies}/>
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
);

export default MyList;
