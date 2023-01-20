import { LevelLabel, LevelValue } from 'constants';
import { Checkbox } from 'features/ui';

const levels = Object.values(LevelValue).map((value) => ({
  value,
  label: LevelLabel[value],
}));

function FilterByLevel({ onLevelChange }) {
  return (
    <div className="jd-filter-by-level jd-filter-panel__level">
      <p className="jd-filter-by-level__label">Уровень сложности:</p>

      {
        levels.map(({ value, label }) => (
          <Checkbox
            key={value}
            value={value}
            label={label}
            onChange={onLevelChange}
          />
        ))
      }
    </div>
  );
}

export default FilterByLevel;
