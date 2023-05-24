import Model, { Recipe } from '../models/searchModel';
import { EndpointRequest } from '../types';
import { switchEndpoints } from '../utils/utils';

async function getAllRecipes(endpoint: EndpointRequest) {
  const newEndpoint = switchEndpoints(endpoint);
  const result = await Model.getAllRecipes(newEndpoint);
  if (!result) return { message: 'Erro ao carregar a API' };
  return result;
}

async function getRecipeByName(endpoint: EndpointRequest, name: string) {
  const newEndpoint = switchEndpoints(endpoint);
  const result = await Model.getRecipeByName(newEndpoint, name);
  if (!result) return { message: 'Erro ao carregar a API' };
  return result;
}

async function getRecipesByFirstLetter(endpoint: EndpointRequest, letter: string) {
  const newEndpoint = switchEndpoints(endpoint);
  const result = await Model.getRecipesByFirstLetter(newEndpoint, letter);
  if (!result) return { message: 'Erro ao carregar a API' };
  return result;
}

export default { getAllRecipes, getRecipeByName, getRecipesByFirstLetter };
