import { Switcher } from 'features/ui';

function FilterByMarkup({ onMarkupChange }) {
  return (
    <Switcher
      className="jd-filter-panel__markup"
      label="Только с готовой версткой"
      onChange={onMarkupChange}
    />
  );
}

export default FilterByMarkup;
