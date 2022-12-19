import './pet-card.scss';

function PetCard() {
  return (
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
          {/* <p className="jd-badge jd-badge--success jd-card__level">Джуниор</p> */}
          {/* <p className="jd-badge jd-badge--accent-secondary jd-card__level">Мидл</p> */}
          {/* <p className="jd-badge jd-badge--error jd-card__level">Сеньор</p> */}
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
  );
}

export default PetCard;
