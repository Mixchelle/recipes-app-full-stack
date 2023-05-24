import fetch from 'node-fetch';
import connection from './db/connection';

const getAll = async () => {
  try {
    const query = 'SELECT * FROM areas;';
    const [result] = await connection.execute(query);
    return result;
  } catch (error) {
    console.log(error);
    return 'fetch error';
  }
};

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
  getByArea,
};
