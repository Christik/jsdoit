import './filter-panel.scss';

import {
  FilterByLevel, FilterByMarkup, Search, Sorting,
} from 'features/catalog';

function FilterPanel() {
  return (
    <div className="jd-filter-panel jd-spacer-top-xl jd-spacer-bottom-xl">
      <Sorting />
      <Search />
      <FilterByMarkup />
      <FilterByLevel />
    </div>
  );
}

export default FilterPanel;
