import { EndpointRequest } from '../types';
import RandomModel from '../models/random.model';

async function getRandom(endpoint: EndpointRequest) {
  return RandomModel.getRandom(endpoint);
}

export default {
  getRandom,
};
