import classnames from 'classnames';

function TagGroup(props) {
  const { className, tags } = props;

  if (tags.length === 0) {
    return null;
  }

  return (
    <ul className={classnames('jd-badge-group', className)}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="jd-badge jd-badge--stroked"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default TagGroup;
