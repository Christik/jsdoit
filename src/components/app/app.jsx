function App() {
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
        <div className="jd-container">
          <div className="jd-filter-panel jd-spacer-top-xl jd-spacer-bottom-xl">
            <div className="jd-dropdown jd-filter-panel__sort">

              <div className="jd-dropdown__trigger">
                <span className="jd-icon jd-icon--sort-desc jd-dropdown__trigger__icon" />
                <div className="jd-dropdown__trigger__text">
                  Сначала новые
                </div>
                <div className="jd-dropdown__trigger__arrow">
                  <span className="jd-icon jd-icon--chevron-down jd-icon--s" />
                </div>
              </div>

              <div className="jd-dropdown__expand">
                <ul className="jd-dropdown__list">
                  <li className="jd-dropdown__item is-active">Сначала новые</li>
                  <li className="jd-dropdown__item">Сначала старые</li>
                  <li className="jd-dropdown__item">Сначала популярные</li>
                </ul>
              </div>

            </div>

            <div className="jd-field jd-field--has-icon-left jd-filter-panel__search">
              <input
                type="text"
                className="jd-field__input"
                placeholder="Искать по названию..."
              />
              <div className="jd-field__icon">
                <span className="jd-icon jd-icon--search jd-icon--s" />
              </div>
            </div>

            <label className="jd-switcher jd-filter-panel__markup" htmlFor="only-with-markup">
              <span className="jd-switcher__bar">
                <input className="jd-switcher__input" type="checkbox" id="only-with-markup" />
                <span className="jd-switcher__track" />
                <span className="jd-switcher__handle" />
              </span>
              <span className="jd-switcher__text">
                Только с готовой версткой
              </span>
            </label>

            <div className="jd-filter-panel__level">
              <p className="jd-text-body jd-text-color-secondary">Уровень сложности:</p>

              <label className="jd-checkbox" htmlFor="level-trainee">
                <input className="jd-checkbox__input" type="checkbox" id="level-trainee" />
                <span className="jd-checkbox__box" />
                <span className="jd-checkbox__text">Стажер</span>
              </label>

              <label className="jd-checkbox" htmlFor="level-junior">
                <input className="jd-checkbox__input" type="checkbox" id="level-junior" />
                <span className="jd-checkbox__box" />
                <span className="jd-checkbox__text">Джуниор</span>
              </label>

              <label className="jd-checkbox" htmlFor="level-middle">
                <input className="jd-checkbox__input" type="checkbox" id="level-middle" />
                <span className="jd-checkbox__box" />
                <span className="jd-checkbox__text">Мидл</span>
              </label>

              <label className="jd-checkbox" htmlFor="senior">
                <input className="jd-checkbox__input" type="checkbox" id="senior" />
                <span className="jd-checkbox__box" />
                <span className="jd-checkbox__text">Сеньор</span>
              </label>
            </div>
          </div>

          <div className="jd-grid jd-grid--3-columns">
            <article className="jd-card">
              <div className="jd-card__cover">
                <img
                  className="jd-card__cover__img"
                  src="https://via.placeholder.com/300x200/ffffff/64748b"
                  width="300"
                  height="200"
                  alt=""
                />
              </div>

              <div className="jd-card__body">
                <div className="jd-card__head">
                  <p className="jd-card__title">Виселица</p>
                  <p className="jd-badge jd-badge--accent jd-card__level">Стажер</p>
                </div>
                <p className="jd-card__description">
                  Реализовать игру «Виселица», в которой нужно угадать скрытое слово.
                  При каждом неверном ответе появляется одна из частей тела висельника.
                  Пользователь проиграл, если висельник появился полностью.
                </p>

                <ul className="jd-badge-group jd-spacer-top-s">
                  <li className="jd-badge jd-badge--stroked">
                    асинхронность
                  </li>
                  <li className="jd-badge jd-badge--stroked">
                    стороннее API
                  </li>
                </ul>
              </div>

              <div className="jd-card__footer">
                <ul className="jd-card__sources">
                  <li className="jd-card__source">
                    <span className="jd-icon jd-icon--figma jd-card__source__icon" />
                    <span className="jd-card__source__text">макет в Figma</span>
                  </li>
                  <li className="jd-card__source">
                    <span className="jd-icon jd-icon--code jd-card__source__icon" />
                    <span className="jd-card__source__text">готовая верстка</span>
                  </li>
                </ul>
              </div>
            </article>

            <article className="jd-card">
              <div className="jd-card__cover">
                <img
                  className="jd-card__cover__img"
                  src="https://via.placeholder.com/300x200/ffffff/64748b"
                  width="300"
                  height="200"
                  alt=""
                />
              </div>

              <div className="jd-card__body">
                <div className="jd-card__head">
                  <p className="jd-card__title">Конвертер валют</p>
                  <p className="jd-badge jd-badge--success jd-card__level">Джуниор</p>
                </div>
                <p className="jd-card__description">
                  Реализовать простой конвертер валют с помощью ExchangeRate-API
                  или любого другого стороннего api.
                </p>

                <ul className="jd-badge-group jd-spacer-top-s">
                  <li className="jd-badge jd-badge--stroked">
                    игра
                  </li>
                  <li className="jd-badge jd-badge--stroked">
                    DOM
                  </li>
                </ul>
              </div>

              <div className="jd-card__footer">
                <ul className="jd-card__sources">
                  <li className="jd-card__source">
                    <span className="jd-icon jd-icon--figma jd-card__source__icon" />
                    <span className="jd-card__source__text">макет в Figma</span>
                  </li>
                </ul>
              </div>
            </article>

            <article className="jd-card">
              <div className="jd-card__cover">
                <img
                  className="jd-card__cover__img"
                  src="https://via.placeholder.com/300x200/ffffff/64748b"
                  width="300"
                  height="200"
                  alt=""
                />
              </div>

              <div className="jd-card__body">
                <div className="jd-card__head">
                  <p className="jd-card__title">Конвертер валют</p>
                  <p className="jd-badge jd-badge--accent-secondary jd-card__level">Мидл</p>
                </div>

                <p className="jd-card__description">
                  Реализовать простой конвертер валют с помощью ExchangeRate-API
                  или любого другого стороннего api.
                </p>

                <ul className="jd-badge-group jd-spacer-top-s">
                  <li className="jd-badge jd-badge--stroked">
                    игра
                  </li>
                  <li className="jd-badge jd-badge--stroked">
                    асинхронность
                  </li>
                  <li className="jd-badge jd-badge--stroked">
                    DOM
                  </li>
                  <li className="jd-badge jd-badge--stroked">
                    HTML/CSS
                  </li>
                  <li className="jd-badge jd-badge--stroked">
                    стороннее API
                  </li>
                </ul>
              </div>

              <div className="jd-card__footer">
                <ul className="jd-card__sources">
                  <li className="jd-card__source">
                    <span className="jd-icon jd-icon--code jd-card__source__icon" />
                    <span className="jd-card__source__text">готовая верстка</span>
                  </li>
                </ul>
              </div>
            </article>

            <article className="jd-card">
              <div className="jd-card__cover">
                <img
                  className="jd-card__cover__img"
                  src="https://via.placeholder.com/300x200/ffffff/64748b"
                  width="300"
                  height="200"
                  alt=""
                />
              </div>

              <div className="jd-card__body">
                <div className="jd-card__head">
                  <p className="jd-card__title">Конвертер валют</p>
                  <p className="jd-badge jd-badge--error jd-card__level">Сеньор</p>
                </div>
                <p className="jd-card__description">
                  Реализовать простой конвертер валют с помощью ExchangeRate-API
                  или любого другого стороннего api.
                </p>

                <ul className="jd-badge-group jd-spacer-top-s">
                  <li className="jd-badge jd-badge--stroked">
                    HTML/CSS
                  </li>
                  <li className="jd-badge jd-badge--stroked">
                    стороннее API
                  </li>
                </ul>
              </div>

              <div className="jd-card__footer">
                <ul className="jd-card__sources">
                  <li className="jd-card__source">
                    <span className="jd-icon jd-icon--figma jd-card__source__icon" />
                    <span className="jd-card__source__text">макет в Figma</span>
                  </li>
                  <li className="jd-card__source">
                    <span className="jd-icon jd-icon--code jd-card__source__icon" />
                    <span className="jd-card__source__text">готовая верстка</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>

          <br />
          <br />

          <nav className="jd-pagination">
            <ul className="jd-pagination__list">
              <li className="jd-pagination__item">
                <a className="jd-pagination__link" href="#prev">
                  Сюда
                </a>
              </li>
              <li className="jd-pagination__item">
                <a className="jd-pagination__link" href="#1">
                  1
                </a>
              </li>
              <li className="jd-pagination__item">
                <a className="jd-pagination__link" href="#2">
                  2
                </a>
              </li>
              <li className="jd-pagination__item">
                <a className="jd-pagination__link" href="#3">
                  3
                </a>
              </li>
              <li className="jd-pagination__item">
                <div className="jd-pagination__divider">...</div>
              </li>
              <li className="jd-pagination__item">
                <a className="jd-pagination__link" href="#104">
                  104
                </a>
              </li>
              <li className="jd-pagination__item">
                <a className="jd-pagination__link" href="#next">
                  Туда
                </a>
              </li>
            </ul>
          </nav>

          <br />
          <br />

        </div>
      </main>

      <main className="jd-content jd-layout__content">
        <div className="jd-container">

          <br />
          <br />

          <div className="jd-pet-layout">
            <div className="jd-pet-layout__gallery">
              <div className="jd-pet-gallery">
                <img
                  className="jd-pet-gallery__img"
                  src="https://via.placeholder.com/560x420/ffffff/64748b"
                  width="560"
                  height="420"
                  alt=""
                />
              </div>
            </div>

            <div className="jd-pet-about jd-pet-layout__about">
              <div className="jd-pet-about__header">
                <h1 className="jd-text-title">
                  Конвертер валют
                </h1>

                <div className="jd-badge jd-badge--success jd-pet-about__header__level">
                  Джуниор
                </div>
              </div>

              <div className="jd-text-body jd-text-color-secondary">
                <p>
                  Реализовать простой конвертер валют с помощью ExchangeRate-API
                  или любого другого стороннего api.
                  Реализовать простой конвертер валют с помощью ExchangeRate-API
                  или любого другого стороннего api.
                </p>
              </div>

              <br />
              <br />
              <p className="jd-text-title jd-text-title--h3 jd-spacer-bottom-m">
                Исходные материалы:
              </p>
              <ul className="jd-text-body jd-spacer-bottom-l">
                <li className="jd-spacer-bottom-s">
                  <span className="jd-icon jd-icon--text jd-icon--color-secondary jd-icon--figma" />
                  макет в Figma
                </li>
                <li>
                  <span className="jd-icon jd-icon--text jd-icon--color-secondary jd-icon--code" />
                  готовая верстка
                </li>
              </ul>

              <ul className="jd-badge-group">
                <li className="jd-badge jd-badge--stroked">
                  игра
                </li>
                <li className="jd-badge jd-badge--stroked">
                  асинхронность
                </li>
                <li className="jd-badge jd-badge--stroked">
                  DOM
                </li>
                <li className="jd-badge jd-badge--stroked">
                  HTML/CSS
                </li>
                <li className="jd-badge jd-badge--stroked">
                  стороннее API
                </li>
              </ul>
            </div>

            <div className="jd-pet-layout__main">
              <div className="jd-pet-layout__main__content">
                <h2 className="jd-text-title jd-text-title--h2 jd-spacer-bottom-l">
                  Техническое задание
                </h2>

                <div className="jd-text-body jd-text-color-secondary">
                  <p>
                    Непрерывная функция изоморфна. Агрессия, например, вызывает ассоцианизм.
                    Криволинейный интеграл, в первом приближении, последовательно искажает
                    интеграл по бесконечной области, тем не менее как только ортодоксальность
                    окончательно возобладает, даже эта маленькая лазейка будет закрыта.
                  </p>
                  <p>
                    Предел последовательности, конечно, прекрасно иллюстрирует автоматизм.
                    Первообразная функция дает ассоцианизм, что неудивительно.
                    Рациональное число, исключая очевидный случай, необходимо и достаточно.
                    Дело в том, что система координат решительно отражает ускоряющийся интеграл
                    по поверхности, в итоге приходим к логическому противоречию.
                    Как мы уже знаем, неопределенный интеграл отталкивает экзистенциальный закон,
                    таким образом осуществляется своего рода связь с темнотой бессознательного.
                  </p>
                  <p>
                    Все это побудило нас обратить внимание на то, что сублимация вырождена.
                    Компульсивность иллюстрирует определитель системы линейных уравнений.
                    Проекция порождает интеграл по ориентированной области.
                  </p>
                </div>
              </div>

              <div className="jd-pet-layout__main__side">
                <div className="jd-pet-layout__main__side__sticky">
                  <a
                    className="jd-button jd-button--block jd-spacer-bottom-s"
                    href="#figma"
                  >
                    Скачать макет figma
                    <span className="jd-icon jd-icon--figma jd-button__icon" />
                  </a>

                  <a
                    className="jd-button jd-button--block"
                    href="#markup"
                  >
                    Скачать верстку
                    <span className="jd-icon jd-icon--code jd-button__icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="jd-footer jd-layout__footer">
        <div className="jd-container">
          &copy; JSDOIT.ru 2022
        </div>
      </footer>
    </section>
  );
}

export default App;
