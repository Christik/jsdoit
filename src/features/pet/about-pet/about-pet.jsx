import './about-pet.scss';

import classnames from 'classnames';

function AboutPet({ className }) {
  return (
    <div className={classnames('jd-pet-about', className)}>
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
  );
}

export default AboutPet;
