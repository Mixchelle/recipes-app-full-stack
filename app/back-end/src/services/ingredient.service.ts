import IngredientModel from '../models/ingredient.model';
import { EndpointRequest } from '../types';
import endpoints from '../utils/utils';

const getAll = async (endpoint: EndpointRequest) => {
  const response = await IngredientModel.getAll(endpoint);
  return response;
};

const getByIngredient = async (endpoint: EndpointRequest, ingredient: string) => {
  const response = IngredientModel.getByIngredient(endpoint, ingredient);
  return response;
};

export default { getAll, getByIngredient };
