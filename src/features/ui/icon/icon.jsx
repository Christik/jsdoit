import './icon.scss';

import classnames from 'classnames';

export const IconName = {
  SORT_DESC: 'sort-desc',
  SEARCH: 'search',
  CHEVRON_DOWN: 'chevron-down',
};

export const IconSize = {
  XS: 'xs',
  S: 's',
  M: 'm',
};

function Icon(props) {
  const { className, icon, size } = props;
  const sizeClass = size ? `jd-icon--${size}` : null;

  return (
    <span className={classnames(
      'jd-icon',
      `jd-icon--${icon}`,
      sizeClass,
      className,
    )}
    />
  );
}

export default Icon;
