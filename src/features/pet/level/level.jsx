import { Tag, TagStyle } from 'features/ui';

const LevelValue = {
  TRAINEE: 'trainee',
  JUNIOR: 'junior',
  MIDDLE: 'middle',
  SENIOR: 'senior',
};

const LevelStyle = {
  [LevelValue.TRAINEE]: TagStyle.ACCENT,
  [LevelValue.JUNIOR]: TagStyle.SUCCESS,
  [LevelValue.MIDDLE]: TagStyle.ACCENT_SECONDARY,
  [LevelValue.SENIOR]: TagStyle.ERROR,
};

function Level({ level }) {
  return (
    <Tag
      className="jd-card__level"
      style={LevelStyle[level.value]}
      tag="p"
    >
      {level.label}
    </Tag>
  );
}

export default Level;
