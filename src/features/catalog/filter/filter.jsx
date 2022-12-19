import './filter.scss';

function Filter() {
  return (
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
  );
}

export default Filter;
