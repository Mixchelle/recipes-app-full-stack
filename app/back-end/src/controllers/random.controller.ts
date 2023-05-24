import { Request, Response } from 'express';
import RandomService from '../services/random.service';
import { EndpointRequest } from '../types';

async function getRandom(req: Request, res: Response) {
  const url = req.baseUrl;
  const response = await RandomService.getRandom(url as EndpointRequest);

  if (!response) return res.status(400).json({ message: 'Some error' });
  return res.status(200).json(response);
}

export default {
  getRandom,
};
