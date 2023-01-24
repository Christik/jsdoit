import './link-list.scss';

import { Icon } from 'features/ui';

function LinkList({ items }) {
  return (
    <ul className="jd-link-list">
      {
        items.map(({
          id, url, icon, title,
        }) => (
          <li key={id} className="jd-link-list__item">
            <a
              className="jd-link-list__link"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <Icon className="jd-link-list__icon" icon={icon} size="s" />
              <span className="jd-link-list__title">
                {title}
              </span>
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default LinkList;
