import { EndpointRequest } from '../types';
import endpoints from '../utils/utils';
import RandomModel from '../models/random.model';

async function getRandom(endpoint: EndpointRequest) {
  const apiEnpoint = endpoints.switchEndpoints(endpoint);
  return RandomModel.getRandom(apiEnpoint);
}

export default {
  getRandom,
};
