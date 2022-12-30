import { Switcher } from 'features/ui';

function FilterByMarkup() {
  return (
    <Switcher
      className="jd-filter-panel__markup"
      id="only-with-markup"
      label="Только с готовой версткой"
    />
  );
}

export default FilterByMarkup;
