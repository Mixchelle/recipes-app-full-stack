import fetch from 'node-fetch';

const getAll = async () => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    const obj = await response.json();
    return obj;
  } catch (error) {
    console.log(error);
    return 'fetch error';
  }
}

const getByArea = async (area: string) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const obj = await response.json();
    return obj;
  } catch (error) {
    console.log(error);
    return 'fetch error';
  }
};

export default {
  getAll,
  getByArea
}
