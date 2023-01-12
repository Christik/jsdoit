import './filter-panel.scss';

import {
  FilterByLevel, FilterByMarkup, Search, Sorting,
} from 'features/catalog';

function FilterPanel(props) {
  const { onSort, onLevelChange } = props;

  return (
    <div className="jd-filter-panel jd-spacer-top-xl jd-spacer-bottom-xl">
      <Sorting onSort={onSort} />
      <Search />
      <FilterByMarkup />
      <FilterByLevel onLevelChange={onLevelChange} />
    </div>
  );
}

export default FilterPanel;
