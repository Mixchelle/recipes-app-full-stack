import connection from './db/connection';
import getRecipes from '../utils/querys';

const getAll = async () => {
  try {
    const query = 'SELECT * FROM meals_areas;';
    const [result] = await connection.execute(query);
    return result;
  } catch (error) {
    console.log(error);
    return 'fetch error';
  }
};

const getByArea = async (area: string) => {
  try {
    const [result] = await connection.execute(getRecipes.getRecipeByArea, [area]);
    return result;
  } catch (error) {
    console.log(error);
    return 'fetch error';
  }
};

export default {
  getAll,
  getByArea,
};
