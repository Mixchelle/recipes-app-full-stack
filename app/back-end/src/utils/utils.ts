import { EndpointRequest } from '../types';

const switchEndpoints = (endpoint: EndpointRequest): 'meal' | 'cocktail' => {
  if (endpoint === '/drinks') return 'cocktail';
  if (endpoint === '/meals') return 'meal';
  return endpoint;
};

export default { switchEndpoints };
