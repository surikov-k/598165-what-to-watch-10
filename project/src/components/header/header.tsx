import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {PropsWithChildren} from 'react';
import cn from 'classnames';

// export enum HeaderType {
//   FilmCard = 'film-card',
//   UserPage = 'user-page'
// }

type HeaderProps = PropsWithChildren<{
  filmCard?: boolean,
  userPage?: boolean,
  // type?: HeaderType
}>;

function Header({filmCard, userPage, children}: HeaderProps) {
  return (
    <header
      className={cn('page-header', {
        // 'film-card__head': type === HeaderType.FilmCard,
        // 'user-page__head': type === HeaderType.UserPage,
        'film-card__head': filmCard,
        'user-page__head': userPage,
      })}
    >
      <Logo/>
      {children}
      <ul className="user-block">
        <li className="user-block__item">
          <Link
            to={AppRoute.MyList}
          >
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </Link>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
