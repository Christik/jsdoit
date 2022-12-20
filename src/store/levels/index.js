import getDataFromNotion from 'services/notion-api';

const DB_ID = 'bd0e9c2f5c3a494eb14f37e7adc482b1';

const getLevels = async () => {
  const data = await getDataFromNotion(DB_ID);

  return data;
};

export default getLevels;
