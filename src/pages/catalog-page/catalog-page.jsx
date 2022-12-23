import { useEffect, useState } from 'react';

import { getPetList } from 'store';

import { PageLoader } from 'features/ui';
import { Filter, PetCard } from 'features/catalog';

function CatalogPage() {
  const [pets, setPets] = useState(null);

  // TODO: переместить список проектов в глобальный state

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const data = await getPetList();

      if (isMounted) {
        setPets(data);
      }
    };

    fetchData();

    return () => { isMounted = false; };
  }, []);

  if (pets === null) {
    return (
      <PageLoader />
    );
  }

  return (
    <div className="jd-container">
      <Filter />

      <div className="jd-grid jd-grid--3-columns jd-spacer-bottom-xl">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
