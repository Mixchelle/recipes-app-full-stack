import IngredientModel from '../models/ingredient.model';
import { EndpointRequest } from '../types';

const switchDrinkCocktail = (endpoint: EndpointRequest): 'meal' | 'cocktail' => {
  if(endpoint === '/drinks') return 'cocktail';
  if(endpoint === '/meals') return 'meal';
  return endpoint;
}

const getAll = async (endpoint: EndpointRequest) => {
  const newEndpoint = switchDrinkCocktail(endpoint);
  console.log(newEndpoint);
  const response = await IngredientModel.getAll(newEndpoint);
  return response
};

const getByIngredient = async (endpoint: EndpointRequest, ingredient: string) => {
  const newEndpoint = switchDrinkCocktail(endpoint);
  const response = IngredientModel.getByIngredient(newEndpoint, ingredient)
  return response;
};

export default { getAll, getByIngredient }
