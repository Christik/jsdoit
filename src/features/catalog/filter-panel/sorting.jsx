import { DEFAULT_SORTING, SortLabel, SortValue } from 'constants';
import { Dropdown, IconName } from 'features/ui';

const list = Object.values(SortValue).map((value) => ({
  value,
  label: SortLabel[value],
}));

const defaultItem = list.find(({ value }) => (value === DEFAULT_SORTING));

function Sorting({ onSort }) {
  return (
    <Dropdown
      className="jd-filter-panel__sort"
      icon={IconName.SORT_DESC}
      list={list}
      defaultItem={defaultItem}
      onSelect={onSort}
    />
  );
}

export default Sorting;
