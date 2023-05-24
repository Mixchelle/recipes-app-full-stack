import { Request, Response } from 'express';
import NameService from '../services/searchServices';
import { EndpointRequest } from '../types';

async function getAllRecipes(req: Request, res: Response) {
  const url = req.baseUrl;
  const recipes = await NameService.getAllRecipes(url as EndpointRequest);
  return res.status(200).json(recipes);
}

async function getByName(req: Request, res: Response) {
  try {
    const { q: query } = req.query;
    const url = req.baseUrl;
    const recipes = await NameService.getRecipeByName(url as EndpointRequest, query as string);
    return res.status(200).json(recipes);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

async function getRecipesByFirstLetter(req: Request, res: Response) {
  const { q: query } = req.query;
  const url = req.baseUrl;
  if (!query || typeof query !== 'string'
  || query.length !== 1 || !(/[a-zA-Z]/).test(query as string)) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  try {
    const recipes = await NameService
      .getRecipesByFirstLetter(url as EndpointRequest, query as string);
    return res.status(200).json(recipes);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export default { getAllRecipes, getRecipesByFirstLetter, getByName };
