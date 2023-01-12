import { Switcher } from 'features/ui';

function FilterByMarkup({ onMarkupChange }) {
  return (
    <Switcher
      className="jd-filter-panel__markup"
      id="only-with-markup"
      label="Только с готовой версткой"
      onChange={onMarkupChange}
    />
  );
}

export default FilterByMarkup;
