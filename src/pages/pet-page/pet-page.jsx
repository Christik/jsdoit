function PetPage() {
  return (
    <div className="jd-container">

      <br />
      <br />

      <div className="jd-pet-layout">
        <div className="jd-pet-layout__gallery">
          <div className="jd-pet-gallery">
            <img
              className="jd-pet-gallery__img"
              src="https://via.placeholder.com/560x420/ffffff/64748b"
              width="560"
              height="420"
              alt=""
            />
          </div>
        </div>

        <div className="jd-pet-about jd-pet-layout__about">
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

        <div className="jd-pet-layout__main">
          <div className="jd-pet-layout__main__content">
            <h2 className="jd-text-title jd-text-title--h2 jd-spacer-bottom-l">
              Техническое задание
            </h2>

            <div className="jd-text-body jd-text-color-secondary">
              <p>
                Непрерывная функция изоморфна. Агрессия, например, вызывает ассоцианизм.
                Криволинейный интеграл, в первом приближении, последовательно искажает
                интеграл по бесконечной области, тем не менее как только ортодоксальность
                окончательно возобладает, даже эта маленькая лазейка будет закрыта.
              </p>
              <p>
                Предел последовательности, конечно, прекрасно иллюстрирует автоматизм.
                Первообразная функция дает ассоцианизм, что неудивительно.
                Рациональное число, исключая очевидный случай, необходимо и достаточно.
                Дело в том, что система координат решительно отражает ускоряющийся интеграл
                по поверхности, в итоге приходим к логическому противоречию.
                Как мы уже знаем, неопределенный интеграл отталкивает экзистенциальный закон,
                таким образом осуществляется своего рода связь с темнотой бессознательного.
              </p>
              <p>
                Все это побудило нас обратить внимание на то, что сублимация вырождена.
                Компульсивность иллюстрирует определитель системы линейных уравнений.
                Проекция порождает интеграл по ориентированной области.
              </p>
            </div>
          </div>

          <div className="jd-pet-layout__main__side">
            <div className="jd-pet-layout__main__side__sticky">
              <a
                className="jd-button jd-button--block jd-spacer-bottom-s"
                href="#figma"
              >
                Скачать макет figma
                <span className="jd-icon jd-icon--figma jd-button__icon" />
              </a>

              <a
                className="jd-button jd-button--block"
                href="#markup"
              >
                Скачать верстку
                <span className="jd-icon jd-icon--code jd-button__icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetPage;
