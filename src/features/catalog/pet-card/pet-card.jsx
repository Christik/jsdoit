import './pet-card.scss';

import { generatePath, Link } from 'react-router-dom';

import { AppRoute } from 'constants';

import { Level } from 'features/pet';
import { PetCardResourceList } from 'features/catalog';

function PetCard({ pet }) {
  const {
    title, description, level, tags, img, resources,
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

          <Level level={level} />
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

      {resources && (
        <div className="jd-card__footer">
          <PetCardResourceList resourceIds={resources} />
        </div>
      )}
    </article>
  );
}

export default PetCard;
