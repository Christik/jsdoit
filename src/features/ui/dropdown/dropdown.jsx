import './dropdown.scss';

import classnames from 'classnames';

import { Icon, IconName, IconSize } from 'features/ui';

function Dropdown(props) {
  const {
    className, icon, list, activeItem,
  } = props;

  return (
    <div className={classnames('jd-dropdown', className)}>

      <div className="jd-dropdown__trigger">
        {icon && (
          <Icon
            className="jd-dropdown__trigger__icon"
            icon={icon}
          />
        )}

        <div className="jd-dropdown__trigger__text">
          {activeItem.label}
        </div>

        <div className="jd-dropdown__trigger__arrow">
          <Icon
            icon={IconName.CHEVRON_DOWN}
            size={IconSize.S}
          />
        </div>
      </div>

      <div className="jd-dropdown__expand">
        <ul className="jd-dropdown__list">
          {list.map((item) => (
            <li
              key={item.value}
              className={classnames(
                'jd-dropdown__item',
                { 'jd-dropdown__item--active': (item.value === activeItem.value) },
              )}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Dropdown;
