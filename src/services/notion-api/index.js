const NOTION_URL = 'https://notion-api.splitbee.io/v1/';

const NotionApiType = {
  TABLE: 'table',
  PAGE: 'page',
};

// TODO: добавить вывод ошибок

const getDataFromNotion = async (dbId, type = NotionApiType.TABLE) => {
  try {
    const response = await fetch(`${NOTION_URL}/${type}/${dbId}`);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error.status);
  }
};

export default getDataFromNotion;
