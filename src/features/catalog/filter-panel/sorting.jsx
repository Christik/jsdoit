import { Dropdown, IconName } from 'features/ui';

const list = [
  {
    value: 'newness-desc',
    label: 'Сначала новые',
  },
  {
    value: 'newness-asc',
    label: 'Сначала старые',
  },
  {
    value: 'popularity-desc',
    label: 'Популярные',
  },
];

function Sorting() {
  return (
    <Dropdown
      className="jd-filter-panel__sort"
      icon={IconName.SORT_DESC}
      list={list}
    />
  );
}

export default Sorting;
