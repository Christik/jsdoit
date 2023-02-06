import { LevelValue } from 'constants';
import { Tag, TagStyle } from 'features/ui';

const LevelStyle = {
  [LevelValue.EASY]: TagStyle.ACCENT,
  [LevelValue.NORMAL]: TagStyle.SUCCESS,
  [LevelValue.HARD]: TagStyle.ACCENT_SECONDARY,
  [LevelValue.EXTRA_HARD]: TagStyle.ERROR,
};

function Level(props) {
  const { className, level } = props;

  return (
    <Tag
      className={className}
      style={LevelStyle[level.value]}
      tag="p"
    >
      {level.label}
    </Tag>
  );
}

export default Level;
