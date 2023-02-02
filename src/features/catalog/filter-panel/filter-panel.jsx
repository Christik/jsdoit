import './filter-panel.scss';

import classnames from 'classnames';

import {
  FilterByLevel, FilterByMarkup, Search, Sorting,
} from 'features/catalog';

function FilterPanel(props) {
  const {
    isDisabled, onSort, searchValue, onSearch, onMarkupChange, onLevelChange,
  } = props;

  return (
    <div className={
      classnames(
        'jd-filter-panel',
        { 'jd-filter-panel--disabled': isDisabled },
        'jd-spacer-top-xl',
      )
    }
    >
      <Sorting onSort={onSort} />
      <Search value={searchValue} onSearch={onSearch} />
      <FilterByMarkup onMarkupChange={onMarkupChange} />
      <FilterByLevel onLevelChange={onLevelChange} />
    </div>
  );
}

export default FilterPanel;
