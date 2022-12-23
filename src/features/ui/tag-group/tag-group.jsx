import './tag-group.scss';

import classnames from 'classnames';

import { Tag } from 'features/ui';

function TagGroup(props) {
  const { className, tags } = props;

  if (tags.length === 0) {
    return null;
  }

  return (
    <ul className={classnames('jd-tag-group', className)}>
      {tags.map((tag) => (
        <Tag key={tag} tag="li">
          {tag}
        </Tag>
      ))}
    </ul>
  );
}

export default TagGroup;
