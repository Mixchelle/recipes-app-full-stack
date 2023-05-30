import { EndpointRequest } from '../types';
import getRecipes from '../utils/querys';
import connection from './db/connection';

export interface Recipe {
  id: number;
  name: string;
  ingredients: string;
  category: string;
}

const ERROR = 'fetch error';

async function getAllRecipes(endpoint: EndpointRequest) {
  try {
    let query;
    if (endpoint === '/drinks') {
      query = `${getRecipes.getRecipesDrinks} GROUP BY dr.id`;
    } else {
      query = `${getRecipes.getRecipesMeals} GROUP BY mr.id`;
    }
    const [data] = await connection.execute(query);
    return data;
  } catch (error) {
    console.log(error);
    return ERROR;
  }
}

async function getRecipeByName(endpoint: EndpointRequest, name: string) {
  try {
    let query;
    if (endpoint === '/drinks') {
      query = `${getRecipes.getRecipesDrinks} WHERE dr.name = '${name}'
    GROUP BY dr.id`;
    } else {
      query = `${getRecipes.getRecipesMeals} WHERE mr.name = '${name}'
    GROUP BY mr.id`;
    }
    const [data] = await connection.execute(query);
    return data;
  } catch (error) {
    console.log(error);
    return ERROR;
  }
}

async function getRecipesByFirstLetter(endpoint: EndpointRequest, letter: string) {
  try {
    let query;
    if (endpoint === '/drinks') {
      query = ` ${getRecipes.getRecipesDrinks} WHERE SUBSTRING(dr.name, 1, 1) = '${letter}'
      GROUP BY dr.id`;
    } else {
      query = ` ${getRecipes.getRecipesMeals} WHERE SUBSTRING(mr.name, 1, 1) = '${letter}'
      GROUP BY mr.id`;
    }
    const [data] = await connection.execute(query);
    return data;
  } catch (error) {
    console.log(error);
    return ERROR;
  }
}

export default { getAllRecipes, getRecipeByName, getRecipesByFirstLetter };
