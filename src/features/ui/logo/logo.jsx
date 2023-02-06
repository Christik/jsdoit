import './logo.scss';

import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

import { AppRoute } from 'constants';

function Logo({ className }) {
  return (
    <NavLink
      className={({ isActive }) => (
        classnames(
          'jd-logo',
          { 'jd-logo--active': isActive },
          className,
        )
      )}
      to={AppRoute.CATALOG}
      end
    >
      <span className="jd-logo__js"><span>JS</span></span>
      do it
      <span className="jd-logo__dot">.</span>
    </NavLink>
  );
}

export default Logo;
