import { Field, IconName } from 'features/ui';

function Search() {
  return (
    <Field
      className="jd-filter-panel__search"
      icon={IconName.SEARCH}
      placeholder="Искать по названию..."
    />
  );
}

export default Search;
