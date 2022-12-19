import { Filter, PetCard } from 'features/catalog';

function CatalogPage() {
  return (
    <div className="jd-container">
      <Filter />

      <div className="jd-grid jd-grid--3-columns jd-spacer-bottom-xl">
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </div>
    </div>
  );
}

export default CatalogPage;
