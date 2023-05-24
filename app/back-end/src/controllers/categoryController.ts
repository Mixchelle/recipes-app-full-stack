import { Request, Response } from "express";
import CategoryService from "../services/categoryService";

const getAllCategories = async (req: Request, res: Response) => {
  const categories = await CategoryService.getAllCategories();
  return res.status(200).json(categories);  
};


const getByCategory = async (req: Request, res: Response) => {
  const q = req.query.q as string;
  const category = await CategoryService.getByCategory(q);
  return res.status(200).json(category);
};
export default { getAllCategories, getByCategory }