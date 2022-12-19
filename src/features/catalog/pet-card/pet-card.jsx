import './pet-card.scss';

import { generatePath, Link } from 'react-router-dom';

import { AppRoute } from 'constants';

function PetCard({ pet }) {
  const {
    title, description, level, tags, img,
  } = pet;

  return (
    <article className="jd-card">
      <div className="jd-card__cover">
        <Link
          className="jd-card__cover__link"
          to={generatePath(AppRoute.PET, { id: 1 })}
        >
          <img
            className="jd-card__cover__img"
            src={img}
            width="300"
            height="200"
            alt={title}
          />
        </Link>
      </div>

      <div className="jd-card__body">
        <div className="jd-card__head">
          <p className="jd-card__title">
            {title}
          </p>

          <p className="jd-badge jd-badge--accent jd-card__level">
            {level}
          </p>

          {/* <p className="jd-badge jd-badge--accent jd-card__level">Стажер</p> */}
          {/* <p className="jd-badge jd-badge--success jd-card__level">Джуниор</p> */}
          {/* <p className="jd-badge jd-badge--accent-secondary jd-card__level">Мидл</p> */}
          {/* <p className="jd-badge jd-badge--error jd-card__level">Сеньор</p> */}
        </div>

        <p className="jd-card__description">
          {description}
        </p>

        <ul className="jd-badge-group jd-spacer-top-s">
          {tags.map((tag) => (
            <li
              key={tag}
              className="jd-badge jd-badge--stroked"
            >
              {tag}
            </li>
          ))}
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
