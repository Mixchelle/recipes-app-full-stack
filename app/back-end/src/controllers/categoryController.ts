import { Request, Response } from "express";
import CategoryService from "../services/categoryService";
import { EndpointRequest } from "../types";

const getAllCategories = async (req: Request, res: Response) => {
  const url = req.baseUrl;
  const categories = await CategoryService.getAllCategories(url as EndpointRequest);
  return res.status(200).json(categories);  
};


const getByCategory = async (req: Request, res: Response) => {
  const url = req.baseUrl;
  const q = req.query.q as string;
  const category = await CategoryService.getByCategory(url as EndpointRequest, q);
  return res.status(200).json(category);
};
export default { getAllCategories, getByCategory }