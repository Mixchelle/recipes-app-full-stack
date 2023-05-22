import { Request, Response } from "express";
import IngredientService from '../services/ingredient.service';

const getIngredients = async (req: Request, res: Response) => {
  const {q: query} = req.query;
  if(query) {
    const response = await IngredientService.getByIngredient(query as string);
    if(!response) return res.status(400).json({ message: 'Some error' });
    return res.status(200).json({ message: response });
  } 

  const response = await IngredientService.getAll();
  if(!response) return res.status(400).json({ message: 'Some error' });
  return res.status(200).json({ message: response });
}

export {getIngredients}
