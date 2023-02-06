import './pet-card.scss';

import { generatePath, Link } from 'react-router-dom';

import { AppRoute } from 'constants';

import { Level } from 'features/pet';
import { PetCardResourceList } from 'features/catalog';
import { TagGroup, Highlight } from 'features/ui';

// TODO: добавить доступ с клавиатуры (focus)

const getTextWithHighlights = (text, highlight) => {
  const startIndex = text.toLowerCase().indexOf(highlight.toLowerCase());

  if (highlight === '' || startIndex === -1) {
    return text;
  }

  const before = text.slice(0, startIndex);
  const inside = text.slice(startIndex, startIndex + highlight.length);
  const after = text.slice(startIndex + highlight.length);

  return (
    <>
      {before}
      <Highlight>{inside}</Highlight>
      {after}
    </>
  );
};

function PetCard(props) {
  const { pet, search } = props;
  const {
    title, description, level, tags, img, resources, slug, createdDate,
  } = pet;

  const visibleTitle = getTextWithHighlights(title, search);
  const visibleDescription = getTextWithHighlights(description, search);
  const hasTags = (tags.length !== 1) && (tags[0] !== '');

  return (
    <article className="jd-card">
      <div className="jd-card__cover">
        <img
          className="jd-card__cover__img"
          src={img}
          width="300"
          height="200"
          alt={title}
        />
      </div>

      <div className="jd-card__body">
        <div className="jd-card__head">
          <p className="jd-card__title">
            {visibleTitle}
          </p>

          <Level level={level} />
        </div>

        <p className="jd-card__description">
          {visibleDescription}
        </p>

        {/* TODO: удалить отображение даты */}
        <p className="jd-card__description">
          <br />
          Дата создания:
          {' '}
          {createdDate.toDateString()}
        </p>

        { hasTags && (
          <TagGroup
            className="jd-spacer-top-s"
            tags={tags}
          />
        )}
      </div>

      { resources && (
        <div className="jd-card__footer">
          <PetCardResourceList resourceIds={resources} />
        </div>
      )}

      <Link
        className="jd-card__link"
        to={generatePath(AppRoute.PET, { slug })}
      >
        Подробнее
      </Link>

    </article>
  );
}

export default PetCard;
