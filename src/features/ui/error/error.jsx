import './error.scss';

import { Icon } from 'features/ui';

function Error() {
  return (
    <div className="jd-error">
      <div className="jd-container">
        <p className="jd-error__title">
          <Icon className="jd-error__icon" icon="sad-smile" />
          Oops...
        </p>
        <p className="jd-error__text">
          Что-то пошло не так.
          <br />
          Обновите страницу или попробуйте зайти позже.
        </p>
      </div>
    </div>
  );
}

export default Error;
