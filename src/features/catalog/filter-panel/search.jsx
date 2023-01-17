import { Field, IconName } from 'features/ui';

function Search({ value, onSearch }) {
  return (
    <Field
      className="jd-filter-panel__search"
      icon={IconName.SEARCH}
      placeholder="Искать по названию..."
      value={value}
      onChange={onSearch}
    />
  );
}

export default Search;
