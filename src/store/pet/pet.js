import { getDataFromNotion } from 'services';
import { getPetList } from 'store';

const DB_ID = '06fd5618a9bb43269728d40621c0d714';

const getPetBySlug = async (slug) => {
  const pets = await getDataFromNotion(DB_ID);
  const petList = await getPetList();

  const pet = pets.find((item) => item.slug === slug);
  const { relatedId: relatedIds } = pet;
  const relatedPetData = petList.find((item) => item.id === relatedIds[0]);

  return {
    ...pet,
    ...relatedPetData,
  };
};

export default getPetBySlug;
