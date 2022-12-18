import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <section className="jd-layout">
      <header className="jd-header jd-layout__header">
        <div className="jd-container">
          <div className="jd-header__in">

            <div className="jd-logo-root jd-header__logo">
              <span className="jd-logo-root__js"><span>JS</span></span>
              do it
              <span className="jd-logo-root__dot">.</span>
            </div>

            <ul className="jd-menu-root jd-header__menu">
              <li className="jd-menu-root__item">
                <a
                  className="jd-menu-root__link is-active"
                  href="#menu"
                >
                  <span className="jd-icon jd-icon--check-circle jd-menu-root__link__icon" />
                  <span className="jd-menu-root__link__text">Задания</span>
                </a>
              </li>

              <li className="jd-menu-root__item">
                <a
                  className="jd-menu-root__link"
                  href="#menu"
                >
                  <span className="jd-icon jd-icon--file-text jd-menu-root__link__icon" />
                  <span className="jd-menu-root__link__text">Новости</span>
                </a>
              </li>

              <li className="jd-menu-root__item">
                <a
                  className="jd-menu-root__link"
                  href="#menu"
                >
                  <span className="jd-icon jd-icon--smile jd-menu-root__link__icon" />
                  <span className="jd-menu-root__link__text">О проекте</span>
                </a>
              </li>
            </ul>

          </div>
        </div>
      </header>

      <main className="jd-content jd-layout__content">
        <Outlet />
      </main>

      <footer className="jd-footer jd-layout__footer">
        <div className="jd-container">
          &copy; JSDOIT.ru 2022
        </div>
      </footer>
    </section>
  );
}

export default Layout;
