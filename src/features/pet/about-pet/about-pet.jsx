import './about-pet.scss';

import classnames from 'classnames';

import { Level } from 'features/pet';
import { TagGroup } from 'features/ui';

function AboutPet(props) {
  const {
    className,
    pet: {
      title, description, level, tags,
    },
  } = props;

  return (
    <div className={classnames('jd-pet-about', className)}>
      <div className="jd-pet-about__header">
        <h1 className="jd-text-title">
          {title}
        </h1>

        <Level level={level} />
      </div>

      <div className="jd-text-body jd-text-color-secondary">
        <p>
          {description}
        </p>
      </div>

      {/* TODO: отрефакторить данные о ресурсах и обновить рендер */}
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

      <TagGroup tags={tags} />
    </div>
  );
}

export default AboutPet;
