import { EndpointRequest } from '../types';
import connection from './db/connection';

const getAll = async (endpoint: EndpointRequest) => {
  try {
    let query;
    if (endpoint === '/drinks') {
      query = 'SELECT * FROM drinks_ingredients;';
    } else {
      query = 'SELECT * FROM meals_ingredients;';
    }
    const [result] = await connection.execute(query);
    return result;
  } catch (error) {
    console.log(error);
    return 'fetch error';
  }
};

const getByIngredient = async (endpoint: EndpointRequest, ingredient: string) => {
  try {
    let query;
    if (endpoint === '/drinks') {
      query = 'SELECT * FROM drinks_ingredients WHERE name = ?;';
    } else {
      query = 'SELECT * FROM meals_ingredientsWHERE name = ?;';
    }
    const [result] = await connection.execute(query, [ingredient]);
    return result;
  } catch (error) {
    console.log(error);
    return 'fetch error';
  }
};

export default { getAll, getByIngredient };
