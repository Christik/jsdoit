import getDataFromNotion from 'services/notion-api';

const DB_ID = 'f291e0761e6147e7bca70bb474874c5b';

const getPetList = async () => {
  const data = await getDataFromNotion(DB_ID);

  return data;
};

export default getPetList;
