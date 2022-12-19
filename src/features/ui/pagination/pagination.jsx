import './pagination.scss';

function Pagination() {
  return (
    <nav className="jd-pagination">
      <ul className="jd-pagination__list">
        <li className="jd-pagination__item">
          <a className="jd-pagination__link" href="#prev">
            Сюда
          </a>
        </li>
        <li className="jd-pagination__item">
          <a className="jd-pagination__link" href="#1">
            1
          </a>
        </li>
        <li className="jd-pagination__item">
          <a className="jd-pagination__link" href="#2">
            2
          </a>
        </li>
        <li className="jd-pagination__item">
          <a className="jd-pagination__link" href="#3">
            3
          </a>
        </li>
        <li className="jd-pagination__item">
          <div className="jd-pagination__divider">...</div>
        </li>
        <li className="jd-pagination__item">
          <a className="jd-pagination__link" href="#104">
            104
          </a>
        </li>
        <li className="jd-pagination__item">
          <a className="jd-pagination__link" href="#next">
            Туда
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
