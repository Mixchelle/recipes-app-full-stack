import Model from '../models/searchModel';
import { EndpointRequest } from '../types';

const ERROR = 'Erro ao carregar a API';

async function getAllRecipes(endpoint: EndpointRequest) {
  const result = await Model.getAllRecipes(endpoint);
  if (!result) return { message: ERROR };
  return result;
}

async function getRecipeByName(endpoint: EndpointRequest, name: string) {
  const result = await Model.getRecipeByName(endpoint, name);
  if (!result) return { message: ERROR };
  return result;
}

async function getRecipesByFirstLetter(endpoint: EndpointRequest, letter: string) {
  const result = await Model.getRecipesByFirstLetter(endpoint, letter);
  if (!result) return { message: ERROR };
  return result;
}

export default { getAllRecipes, getRecipeByName, getRecipesByFirstLetter };
