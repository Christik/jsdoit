import './main-menu.scss';

import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import { AppRoute } from 'constants';

function MainMenu({ className }) {
  return (
    <ul className={classnames('jd-main-menu', className)}>
      <li className="jd-main-menu__item">
        <NavLink
          className={({ isActive }) => (isActive ? 'jd-main-menu__link jd-main-menu__link--active' : 'jd-main-menu__link')}
          to={AppRoute.CATALOG}
          end
        >
          <span className="jd-icon jd-icon--check-circle jd-main-menu__link__icon" />
          <span className="jd-main-menu__link__text">Задания</span>
        </NavLink>
      </li>

      <li className="jd-main-menu__item">
        <a
          className="jd-main-menu__link"
          href="#menu"
        >
          <span className="jd-icon jd-icon--file-text jd-main-menu__link__icon" />
          <span className="jd-main-menu__link__text">Новости</span>
        </a>
      </li>

      <li className="jd-main-menu__item">
        <a
          className="jd-main-menu__link"
          href="#menu"
        >
          <span className="jd-icon jd-icon--smile jd-main-menu__link__icon" />
          <span className="jd-main-menu__link__text">О проекте</span>
        </a>
      </li>
    </ul>
  );
}

export default MainMenu;
