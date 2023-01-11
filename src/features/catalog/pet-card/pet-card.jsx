import './pet-card.scss';

import { generatePath, Link } from 'react-router-dom';

import { AppRoute } from 'constants';

import { Level } from 'features/pet';
import { PetCardResourceList } from 'features/catalog';
import { TagGroup } from 'features/ui';

function PetCard({ pet }) {
  const {
    title, description, level, tags, img, resources, slug, createdDate,
  } = pet;

  return (
    <article className="jd-card">
      <div className="jd-card__cover">
        <Link
          className="jd-card__cover__link"
          to={generatePath(AppRoute.PET, { slug })}
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

        {/* TODO: удалить отображение даты */}
        <p className="jd-card__description">
          <br />
          Дата создания:
          {' '}
          {createdDate.toDateString()}
        </p>

        <TagGroup
          className="jd-spacer-top-s"
          tags={tags}
        />
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
