import './tag.scss';

import classnames from 'classnames';

export const TagStyle = {
  DEFAULT: 'default',
  ACCENT: 'accent',
  ACCENT_SECONDARY: 'accent-secondary',
  SUCCESS: 'success',
  ERROR: 'error',
};

const TagClassName = {
  [TagStyle.DEFAULT]: 'jd-tag--stroked',
  [TagStyle.ACCENT]: 'jd-tag--accent',
  [TagStyle.ACCENT_SECONDARY]: 'jd-tag--accent-secondary',
  [TagStyle.SUCCESS]: 'jd-tag--success',
  [TagStyle.ERROR]: 'jd-tag--error',
};

function Tag(props) {
  const {
    tag: TagName = 'div',
    style = TagStyle.DEFAULT,
    className,
    children,
  } = props;

  return (
    <TagName className={classnames(
      'jd-tag',
      TagClassName[style],
      className,
    )}
    >
      {children}
    </TagName>
  );
}

export default Tag;
