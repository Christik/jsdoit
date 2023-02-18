import { getDataFromNotion } from 'services';

const getSolutions = async (tableId) => {
  const data = await getDataFromNotion(tableId);

  return data;
};

export default getSolutions;
