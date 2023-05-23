import { EndpointRequest } from "../types";
import { switchEndpoints } from "../utils/utils";
import * as RandomModel from '../models/random.model';

export async function getRandom(endpoint: EndpointRequest) {
  const apiEnpoint = switchEndpoints(endpoint);
  return await RandomModel.getRandom(apiEnpoint);
}