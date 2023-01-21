import { toast } from 'react-toastify';

import { NotionApiType } from 'constants';

const NOTION_URL = 'https://notion-api.splitbee.io/v1/';

// TODO: добавить вывод ошибок

const getDataFromNotion = async (dbId, type = NotionApiType.TABLE) => {
  try {
    const response = await fetch(`${NOTION_URL}/${type}/${dbId}`);

    if (!response.ok) {
      toast.error(`${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    toast.error(error.message);
    throw new Error(error);
  }
};

export default getDataFromNotion;
