import './filter-panel.scss';

import {
  FilterByLevel, FilterByMarkup, Search, Sorting,
} from 'features/catalog';

function FilterPanel(props) {
  const { onPetsSort, onLevelChange } = props;

  return (
    <div className="jd-filter-panel jd-spacer-top-xl jd-spacer-bottom-xl">
      <Sorting onSort={onPetsSort} />
      <Search />
      <FilterByMarkup />
      <FilterByLevel onLevelChange={onLevelChange} />
    </div>
  );
}

export default FilterPanel;
