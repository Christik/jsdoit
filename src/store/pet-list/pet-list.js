import { getDataFromNotion } from 'services';
import { getLevels } from 'store';

const DB_ID = 'f291e0761e6147e7bca70bb474874c5b';

const getPetList = async () => {
  const petList = await getDataFromNotion(DB_ID);
  const levels = await getLevels();

  return petList.map((pet) => {
    const { level: levelIds, createdDate } = pet;
    const currentLevel = levels.find((item) => item.id === levelIds[0]);

    return {
      ...pet,
      createdDate: new Date(createdDate),
      level: currentLevel,
    };
  });
};

export default getPetList;
