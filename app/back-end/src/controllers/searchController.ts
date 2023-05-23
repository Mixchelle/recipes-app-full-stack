import { Request, Response } from 'express';
import NameService from '../services/searchServices';

async function getAllRecipes(req: Request, res: Response) {
const { q } = req.query;
if (q) {
const recipes = await NameService.getAllRecipes();
return res.status(200).json(recipes);
}
try {
if (typeof q === 'string') {
const recipes = await NameService.getRecipeByName(q);
return res.status(200).json(recipes);
} else {
return res.status(400).json({ error: 'Invalid input' });
}
} catch (error) {
return res.status(500).json({ error: 'Internal server error' });
}
}

async function getRecipesByFirstLetter(req: Request, res: Response) {
const { q } = req.query;
if (!q || typeof q !== 'string' || q.length !== 1 || !(/[a-zA-Z]/).test(q)) {
return res.status(400).json({ error: 'Invalid input' });
}
try {
const recipes = await NameService.getRecipesByFirstLetter(q);
return res.status(200).json(recipes);
} catch (error) {
return res.status(500).json({ error: 'Internal server error' });
}
}

export default { getAllRecipes, getRecipesByFirstLetter };