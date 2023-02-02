import { useEffect, useState } from 'react';

import { SortValue, DEFAULT_SORTING, LevelValue } from 'constants';
import { getPetList, getResources } from 'store';

import { Loader, Error } from 'features/ui';
import { EmptyPetList, FilterPanel, PetList } from 'features/catalog';

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
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isCatalogEmpty, setIsCatalogEmpty] = useState(false);

  const [pets, setPets] = useState(null);
  const [visiblePets, setVisiblePets] = useState(null);

  const [resourceList, setResourceList] = useState(null);

  const [selectedSorting, setSelectedSorting] = useState(DEFAULT_SORTING);
  const [searchValue, setSearchValue] = useState('');
  const [isMarkupPrepared, setIsMarkupPrepared] = useState(false);
  const [selectedLevels, setSelectedLevels] = useState([]);

  const isCatalogReady = !(isLoading || isCatalogEmpty || isError);

  const onSortingChange = (value) => {
    setSelectedSorting(value);
  };

  // TODO: добавить приоритет поиска по заголовку

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

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const petList = await getPetList();
        const resources = await getResources();

        if (isMounted) {
          setPets(petList);
          setResourceList(resources);
        }
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    if (visiblePets !== null) {
      setIsLoading(false);
    }
  }, [visiblePets]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && pets !== null) {
      let updatedPets = [...pets];

      updatedPets = search(updatedPets, searchValue);
      updatedPets = filterByMarkup(updatedPets, isMarkupPrepared, resourceList);
      updatedPets = filterByLevel(updatedPets, selectedLevels);
      updatedPets = sort(updatedPets, selectedSorting);

      setVisiblePets(updatedPets);
      setIsCatalogEmpty(updatedPets.length === 0);
    }

    return () => { isMounted = false; };
  }, [
    pets, resourceList, searchValue,
    isMarkupPrepared, selectedLevels, selectedSorting,
  ]);

  return (
    <>
      <div className="jd-container">
        <FilterPanel
          isDisabled={isLoading || isError}
          searchValue={searchValue}
          onSort={onSortingChange}
          onSearch={onSearch}
          onMarkupChange={onMarkupChange}
          onLevelChange={onLevelChange}
        />
      </div>

      { isError && <Error /> }

      { isLoading && <Loader /> }

      { isCatalogEmpty && <EmptyPetList /> }

      { isCatalogReady && <PetList pets={visiblePets} searchValue={searchValue} /> }
    </>
  );
}

export default CatalogPage;
