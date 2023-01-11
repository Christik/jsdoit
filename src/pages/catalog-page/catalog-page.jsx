import { useEffect, useState } from 'react';

import { SortValue, DEFAULT_SORTING } from 'constants';
import { getPetList } from 'store';

import { PageLoader } from 'features/ui';
import { FilterPanel, PetCard } from 'features/catalog';

function CatalogPage() {
  const [pets, setPets] = useState(null);
  const [visiblePets, setVisiblePets] = useState(null);

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

  if (pets === null) {
    return (
      <PageLoader />
    );
  }

  return (
    <div className="jd-container">
      <FilterPanel
        onPetsSort={onPetsSort}
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
