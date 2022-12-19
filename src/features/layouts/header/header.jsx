import './header.scss';

import classnames from 'classnames';

import { Logo, MainMenu } from 'features/ui';

function Header({ className }) {
  return (
    <header className={classnames('jd-header', className)}>
      <div className="jd-container">
        <div className="jd-header__in">

          <Logo className="jd-header__logo" />

          <MainMenu className="jd-header__menu" />

        </div>
      </div>
    </header>
  );
}

export default Header;
