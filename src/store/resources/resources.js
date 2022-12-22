import { getDataFromNotion } from 'services';

const DB_ID = '2acae5b1d3d74fa485b8ea73e67ebb17';

const getResources = async () => {
  const data = await getDataFromNotion(DB_ID);

  return data;
};

export default getResources;
