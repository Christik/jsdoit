import { useEffect, useState } from 'react';

import { getPetList } from 'store';

import { Filter, PetCard } from 'features/catalog';

function CatalogPage() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const petList = await getPetList();

      if (isMounted) {
        setPets(petList);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="jd-container">
      <Filter />

      <div className="jd-grid jd-grid--3-columns jd-spacer-bottom-xl">
        {pets.map((pet) => (
          <PetCard
            key={pet.id}
            pet={pet}
          />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
