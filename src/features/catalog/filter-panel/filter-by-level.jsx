import { Checkbox } from 'features/ui';

const levels = [
  {
    value: 'trainee',
    label: 'Стажер',
  },
  {
    value: 'junior',
    label: 'Джуниор',
  },
  {
    value: 'middle',
    label: 'Мидл',
  },
  {
    value: 'senior',
    label: 'Сеньор',
  },
];

function FilterByLevel() {
  return (
    <div className="jd-filter-by-level jd-filter-panel__level">
      <p className="jd-filter-by-level__label">Уровень сложности:</p>

      { levels.map((level) => (
        <Checkbox
          value={level.value}
          label={level.label}
        />
      )) }
    </div>
  );
}

export default FilterByLevel;
