import React from 'react';

const NotFound = () => (
  <div className="user-page">
    <div className="sign-in user-page__content">
      <h1 className="page-title user-page__title">The page you were looking for wasn&apos;t found</h1>
    </div>

    <footer className="page-footer">
      <div className="logo">
        <a href="/" className="logo__link logo__link--light">
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

export default NotFound;
