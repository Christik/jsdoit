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

const filterByLevel = (items, levels) => {
  if (levels.length === 0) {
    return items;
  }

  return items.filter(({ level: { value } }) => levels.includes(value));
};

const filterByMarkup = (items, isChecked, resourceList) => {
  if (!isChecked) {
    return items;
  }

  // TODO: отрефакторить (магическое значение)
  const { id } = resourceList.find(({ value }) => (value === 'markup'));

  return items.filter(({ resources }) => resources?.includes(id));
};

function CatalogPage() {
  const [pets, setPets] = useState(null);
  const [visiblePets, setVisiblePets] = useState(null);

  const [resourceList, setResourceList] = useState(null);

  const [selectedSorting, setSelectedSorting] = useState(DEFAULT_SORTING);
  const [isMarkupPrepared, setIsMarkupPrepared] = useState(false);
  const [selectedLevels, setSelectedLevels] = useState([]);

  const onSortingChange = (value) => {
    setSelectedSorting(value);
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

      updatedPets = filterByMarkup(updatedPets, isMarkupPrepared, resourceList);
      updatedPets = filterByLevel(updatedPets, selectedLevels);
      updatedPets = sort(updatedPets, selectedSorting);

      setVisiblePets(updatedPets);
    }

    return () => { isMounted = false; };
  }, [pets, resourceList, isMarkupPrepared, selectedLevels, selectedSorting]);

  if (visiblePets === null) {
    return (
      <PageLoader />
    );
  }

  return (
    <div className="jd-container">
      <FilterPanel
        onSort={onSortingChange}
        onMarkupChange={onMarkupChange}
        onLevelChange={onLevelChange}
      />

      <div className="jd-grid jd-grid--3-columns jd-spacer-bottom-xl">
        {
          visiblePets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))
        }
      </div>
    </div>
  );
}

export default CatalogPage;
