import Model from '../models/searchModel';
import { EndpointRequest } from '../types';
import endpoints from '../utils/utils';

const ERROR = 'Erro ao carregar a API';

async function getAllRecipes(endpoint: EndpointRequest) {
  const newEndpoint = endpoints.switchEndpoints(endpoint);
  const result = await Model.getAllRecipes(newEndpoint);
  if (!result) return { message: ERROR };
  return result;
}

async function getRecipeByName(endpoint: EndpointRequest, name: string) {
  const newEndpoint = endpoints.switchEndpoints(endpoint);
  const result = await Model.getRecipeByName(newEndpoint, name);
  if (!result) return { message: ERROR };
  return result;
}

async function getRecipesByFirstLetter(endpoint: EndpointRequest, letter: string) {
  const newEndpoint = endpoints.switchEndpoints(endpoint);
  const result = await Model.getRecipesByFirstLetter(newEndpoint, letter);
  if (!result) return { message: ERROR };
  return result;
}

export default { getAllRecipes, getRecipeByName, getRecipesByFirstLetter };
