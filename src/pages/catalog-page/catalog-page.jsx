function CatalogPage() {
  return (
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
  );
}

export default CatalogPage;
