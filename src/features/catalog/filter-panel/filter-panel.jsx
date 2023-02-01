import './filter-panel.scss';

import {
  FilterByLevel, FilterByMarkup, Search, Sorting,
} from 'features/catalog';

function FilterPanel(props) {
  const {
    onSort, searchValue, onSearch, onMarkupChange, onLevelChange,
  } = props;

  // TODO: сделать компоненты контролируемыми

  return (
    <div className="jd-filter-panel jd-spacer-top-xl">
      <Sorting onSort={onSort} />
      <Search value={searchValue} onSearch={onSearch} />
      <FilterByMarkup onMarkupChange={onMarkupChange} />
      <FilterByLevel onLevelChange={onLevelChange} />
    </div>
  );
}

export default FilterPanel;
