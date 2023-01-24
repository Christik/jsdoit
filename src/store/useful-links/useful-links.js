import { getDataFromNotion } from 'services';

const getUsefulLinks = async (tableId) => {
  const data = await getDataFromNotion(tableId);

  return data;
};

export default getUsefulLinks;
