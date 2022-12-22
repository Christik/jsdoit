import classnames from 'classnames';

const levelClassName = {
  trainee: 'jd-badge--accent',
  junior: 'jd-badge--success',
  middle: 'jd-badge--accent-secondary',
  senior: 'jd-badge--error',
};

function Level({ level }) {
  return (
    <p
      className={classnames(
        'jd-badge',
        levelClassName[level.value],
        'jd-card__level',
      )}
    >
      {level.label}
    </p>
  );
}

export default Level;
