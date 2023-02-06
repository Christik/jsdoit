/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import './dropdown.scss';

import { useState } from 'react';
import classnames from 'classnames';

import { Icon, IconName, IconSize } from 'features/ui';

function Dropdown(props) {
  const {
    className, icon, list, onSelect, defaultItem,
  } = props;

  const [isOpened, setIsOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultItem || list[0]);

  const onTriggerClick = () => {
    setIsOpened((prevStatus) => !prevStatus);
  };

  const onItemClick = (item) => () => {
    setSelectedItem(item);
    setIsOpened(false);
    onSelect(item.value);
  };

  return (
    <div className={classnames('jd-dropdown', className)}>

      <button
        type="button"
        className={classnames(
          'jd-dropdown__trigger',
          { 'jd-dropdown__trigger--is-opened': isOpened },
        )}
        onClick={onTriggerClick}
      >
        { icon && (
          <Icon
            className="jd-dropdown__trigger-icon"
            icon={icon}
          />
        )}

        <div className="jd-dropdown__trigger-text">
          {selectedItem.label}
        </div>

        <div className="jd-dropdown__trigger-arrow">
          <Icon
            icon={IconName.CHEVRON_DOWN}
            size={IconSize.S}
          />
        </div>
      </button>

      { isOpened && (
        <div className="jd-dropdown__expand">
          <ul className="jd-dropdown__list">
            {
              list.map((item) => (
                <li
                  key={item.value}
                  className={classnames(
                    'jd-dropdown__item',
                    { 'jd-dropdown__item--active': (item.value === selectedItem.value) },
                  )}
                  onClick={onItemClick(item)}
                >
                  {item.label}
                </li>
              ))
            }
          </ul>
        </div>
      )}

    </div>
  );
}

export default Dropdown;
