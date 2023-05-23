import { Request, Response } from "express";
import IngredientService from '../services/ingredient.service';
import { EndpointRequest } from "../types";

const getIngredients = async (req: Request, res: Response) => {
  const {q: query} = req.query;
  const url = req.baseUrl;
  if(query) {
    const response = await IngredientService.getByIngredient(url as EndpointRequest, query as string);
    if(!response) return res.status(400).json({ message: 'Some error' });
    return res.status(200).json(response);
  } 

  const response = await IngredientService.getAll(url as EndpointRequest);
  if(!response) return res.status(400).json({ message: 'Some error' });
  return res.status(200).json(response);
}

export {getIngredients}
