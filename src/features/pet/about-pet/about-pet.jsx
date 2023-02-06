import './about-pet.scss';

import classnames from 'classnames';

import { Level } from 'features/pet';
import { TagGroup } from 'features/ui';

function AboutPet(props) {
  const {
    className,
    pet: {
      title, description, level, tags, figmaUrl, markupUrl,
    },
  } = props;

  const hasFigma = (figmaUrl !== '');
  const hasMarkup = (markupUrl !== '');
  const hasTags = (tags.length !== 1 && tags[0] !== '');

  return (
    <div className={classnames('jd-pet-about', className)}>
      <div className="jd-pet-about__header">
        <h1 className="jd-text-title">
          {title}
        </h1>

        <Level className="jd-pet-about__level" level={level} />
      </div>

      <div className="jd-text-body jd-text-color-secondary">
        <p>
          {description}
        </p>
      </div>

      <div className="jd-spacer-top-xl is-mobile-hidden">
        <p className="jd-text-title jd-text-title--xs jd-spacer-bottom-m">
          Исходные материалы:
        </p>
        <ul className="jd-text-body">
          { hasFigma && (
            <li className="jd-spacer-bottom-s">
              <span className="jd-icon jd-icon--text jd-icon--color-secondary jd-icon--figma" />
              макет в Figma
            </li>
          )}

          { hasMarkup && (
            <li>
              <span className="jd-icon jd-icon--text jd-icon--color-secondary jd-icon--code" />
              готовая верстка
            </li>
          )}
        </ul>
      </div>

      { hasTags && <TagGroup className="jd-spacer-top-l" tags={tags} /> }
    </div>
  );
}

export default AboutPet;
