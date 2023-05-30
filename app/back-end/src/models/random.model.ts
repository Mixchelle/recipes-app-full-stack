import { EndpointRequest } from '../types';
import getRecipes from '../utils/querys';
import connection from './db/connection';

async function getRandom(endpoint: EndpointRequest) {
  try {
    let query;
    if (endpoint === '/drinks') {
      const randomNumber = Math.floor(Math.random() * 64 + 1);
      query = `${getRecipes.getRecipesDrinks} WHERE dr.id = '${randomNumber}'
      GROUP BY dr.id;`;
    } else {
      const randomNumber = Math.floor(Math.random() * 5 + 1);
      query = `${getRecipes.getRecipesMeals} WHERE mr.id = '${randomNumber}'
      GROUP BY mr.id;`;
    }
    const [result] = await connection.execute(query);
    return result;
  } catch (error) {
    console.log(error);
    return 'fetch error';
  }
}

export default {
  getRandom,
};
