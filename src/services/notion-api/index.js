const NOTION_URL = 'https://notion-api.splitbee.io/v1/table';

// TODO: добавить вывод ошибок

const getDataFromNotion = async (dbId) => {
  try {
    const response = await fetch(`${NOTION_URL}/${dbId}`);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error.status);
  }
};

export default getDataFromNotion;
