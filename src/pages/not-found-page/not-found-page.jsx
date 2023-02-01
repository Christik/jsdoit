import { AppRoute } from 'constants';
import { Link } from 'react-router-dom';
import './not-found-page.scss';

function NotFoundPage() {
  return (
    <div className="jd-not-found-page">
      <div className="jd-container">
        <div className="jd-not-found-page__title jd-text-title">
          (×_×)
        </div>
        <p className="jd-text-body">
          Ой, такой страницы не существует.
        </p>
        <p className="jd-text-body">
          Зато в
          {' '}
          <Link
            className="jd-link jd-link--accent"
            to={AppRoute.CATALOG}
          >
            каталоге
          </Link>
          {' '}
          можно выбрать проект на свой вкус :)
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
