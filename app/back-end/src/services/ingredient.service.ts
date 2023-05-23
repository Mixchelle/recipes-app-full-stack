import IngredientModel from '../models/ingredient.model';
import { EndpointRequest } from '../types';
import { switchEndpoints } from '../utils/utils';

const getAll = async (endpoint: EndpointRequest) => {
  const newEndpoint = switchEndpoints(endpoint);
  const response = await IngredientModel.getAll(newEndpoint);
  return response
};

const getByIngredient = async (endpoint: EndpointRequest, ingredient: string) => {
  const newEndpoint = switchEndpoints(endpoint);
  const response = IngredientModel.getByIngredient(newEndpoint, ingredient)
  return response;
};

export default { getAll, getByIngredient }
