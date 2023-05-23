import { Request, Response } from "express";
import CategoryService from "../services/categoryService";

const getAllCategories = async (req: Request, res: Response) => {
    const categories = await CategoryService.getAllCategories();
  return res.status(200).json(categories);  
};

export default { getAllCategories }