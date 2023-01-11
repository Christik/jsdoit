import { useEffect, useState } from 'react';

import { SortValue, DEFAULT_SORTING, LevelValue } from 'constants';
import { getPetList } from 'store';

import { PageLoader } from 'features/ui';
import { FilterPanel, PetCard } from 'features/catalog';

const allLevels = Object.values(LevelValue);

// TODO: реализовать одновременную работу сортировки и фильтрации

function CatalogPage() {
  const [pets, setPets] = useState(null);
  const [visiblePets, setVisiblePets] = useState(null);

  const [currentLevels, setCurrentLevels] = useState([]);

  const onPetsSort = (value) => {
    switch (value) {
      case SortValue.NEWNESS_DESC:
        setVisiblePets(
          [...pets].sort((currentPet, nextPet) => (
            Date.parse(nextPet.createdDate) - Date.parse(currentPet.createdDate)
          )),
        );
        break;

      case SortValue.NEWNESS_ASC:
        setVisiblePets(
          [...pets].sort((currentPet, nextPet) => (
            Date.parse(currentPet.createdDate) - Date.parse(nextPet.createdDate)
          )),
        );
        break;

      default:
        break;
    }
  };

  const onLevelChange = (changedLevel, isChecked) => {
    setCurrentLevels((prevState) => allLevels.filter((level) => {
      const isLevelChanged = (level === changedLevel);
      return (isLevelChanged ? isChecked : prevState.includes(level));
    }));
  };

  const filterByLevel = () => {
    if (currentLevels.length === 0) {
      setVisiblePets(pets);
      return;
    }

    setVisiblePets(
      [...pets].filter(({ level }) => currentLevels.includes(level.value)),
    );
  };

  // TODO: переместить список проектов в глобальный state

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const data = await getPetList();

      if (isMounted) {
        setPets(data);
        setVisiblePets(data);
      }
    };

    fetchData();

    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && pets !== null) {
      onPetsSort(DEFAULT_SORTING);
    }

    return () => { isMounted = false; };
  }, [pets]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && pets !== null) {
      filterByLevel();
    }

    return () => { isMounted = false; };
  }, [currentLevels]);

  if (pets === null) {
    return (
      <PageLoader />
    );
  }

  return (
    <div className="jd-container">
      <FilterPanel
        onPetsSort={onPetsSort}
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
