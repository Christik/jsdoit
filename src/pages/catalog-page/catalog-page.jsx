import { useEffect, useState } from 'react';

import { SortValue, DEFAULT_SORTING, LevelValue } from 'constants';
import { getPetList, getResources } from 'store';

import { PageLoader } from 'features/ui';
import { FilterPanel, PetCard } from 'features/catalog';

const sort = (items, sortType) => {
  switch (sortType) {
    case SortValue.NEWNESS_DESC:
      return items.sort((currentItem, nextItem) => (
        Date.parse(nextItem.createdDate) - Date.parse(currentItem.createdDate)
      ));

    case SortValue.NEWNESS_ASC:
      return items.sort((currentItem, nextItem) => (
        Date.parse(currentItem.createdDate) - Date.parse(nextItem.createdDate)
      ));

    default:
      return items;
  }
};

const search = (items, value) => {
  if (value === '') {
    return items;
  }

  const match = (text) => (text.toLowerCase().indexOf(value.toLowerCase()) !== -1);

  return items.filter(({ title, description }) => match(title) || match(description));
};

const filterByMarkup = (items, isChecked, resourceList) => {
  if (!isChecked) {
    return items;
  }

  // TODO: отрефакторить (магическое значение)
  const { id } = resourceList.find(({ value }) => (value === 'markup'));

  return items.filter(({ resources }) => resources?.includes(id));
};

const filterByLevel = (items, levels) => {
  if (levels.length === 0) {
    return items;
  }

  return items.filter(({ level: { value } }) => levels.includes(value));
};

function CatalogPage() {
  const [pets, setPets] = useState(null);
  const [visiblePets, setVisiblePets] = useState(null);

  const [resourceList, setResourceList] = useState(null);

  const [selectedSorting, setSelectedSorting] = useState(DEFAULT_SORTING);
  const [searchValue, setSearchValue] = useState('');
  const [isMarkupPrepared, setIsMarkupPrepared] = useState(false);
  const [selectedLevels, setSelectedLevels] = useState([]);

  // TODO: обновить везде loader
  const isPetListReady = (visiblePets !== null);
  const isPetListEmpty = isPetListReady ? (visiblePets.length === 0) : false;

  const onSortingChange = (value) => {
    setSelectedSorting(value);
  };

  // TODO: добавить приоритет поиска по заголовку
  // TODO: в карточках добавить выделение поисковой фразы
  const onSearch = (value) => {
    setSearchValue(value);
  };

  const onMarkupChange = (isChecked) => {
    setIsMarkupPrepared(isChecked);
  };

  const onLevelChange = (changedLevel, isChecked) => {
    setSelectedLevels((prevState) => Object.values(LevelValue).filter((level) => {
      const isLevelChanged = (level === changedLevel);
      return (isLevelChanged ? isChecked : prevState.includes(level));
    }));
  };

  // TODO: переместить список проектов в глобальный state

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const petList = await getPetList();
      const resources = await getResources();

      if (isMounted) {
        setPets(petList);
        setResourceList(resources);
      }
    };

    fetchData();

    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && pets !== null) {
      let updatedPets = [...pets];

      updatedPets = search(updatedPets, searchValue);
      updatedPets = filterByMarkup(updatedPets, isMarkupPrepared, resourceList);
      updatedPets = filterByLevel(updatedPets, selectedLevels);
      updatedPets = sort(updatedPets, selectedSorting);

      setVisiblePets(updatedPets);
    }

    return () => { isMounted = false; };
  }, [pets, resourceList, searchValue, isMarkupPrepared, selectedLevels, selectedSorting]);

  // TODO: добавить сообщение, если список после сортировки пуст

  return (
    <div className="jd-container">
      <FilterPanel
        searchValue={searchValue}
        onSort={onSortingChange}
        onSearch={onSearch}
        onMarkupChange={onMarkupChange}
        onLevelChange={onLevelChange}
      />

      { isPetListReady ? null : <PageLoader /> }

      {
        isPetListEmpty
          ? 'Упс... По данному запросу задания не найдены.'
          : null
      }

      {
        (!isPetListReady || isPetListEmpty)
          ? null
          : (
            <div className="jd-grid jd-grid--3-columns jd-spacer-bottom-xl">
              { visiblePets.map((pet) => (
                <PetCard
                  key={pet.id}
                  pet={pet}
                  search={searchValue}
                />
              ))}
            </div>
          )
        }
    </div>
  );
}

export default CatalogPage;
