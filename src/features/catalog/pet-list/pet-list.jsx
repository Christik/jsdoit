import { PetCard } from 'features/catalog';

function PetList(props) {
  const { pets, searchValue } = props;

  return (
    <div className="jd-container jd-spacer-top-xl">
      <div className="jd-grid jd-grid--3-columns jd-spacer-bottom-xl">
        { pets.map((pet) => (
          <PetCard
            key={pet.id}
            pet={pet}
            search={searchValue}
          />
        ))}
      </div>
    </div>
  );
}

export default PetList;
