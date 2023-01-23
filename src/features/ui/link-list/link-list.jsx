import './link-list.scss';

import { Icon } from 'features/ui';

function LinkList({ items }) {
  return (
    <ul className="jd-link-list">
      {
        items.map(({ url, icon, title }) => (
          <li className="jd-link-list__item">
            <a href={url} className="jd-link-list__link">
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
