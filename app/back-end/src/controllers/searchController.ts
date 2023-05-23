import { Request, Response } from 'express';
import NameService from '../services/searchServices';

async function getAllRecipes(req: Request, res: Response) {
  const { q } = req.parameter;
  if (!q ) {
    const recipes = await NameService.getAllRecipes();
    return res.status(200).json(recipes);
  }
  try {
    const recipes = await NameService.getRecipeByName(q);
 return  res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getRecipesByFirstLetter(req: Request, res: Response) {
  const { q } = req.query;
  if (!q || q.length !== 1 || !(/[a-zA-Z]/).test(q)) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  try {
    const recipes = await NameService.getRecipesByFirstLetter(q);
    return res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export default { getAllRecipes, getRecipesByFirstLetter };
