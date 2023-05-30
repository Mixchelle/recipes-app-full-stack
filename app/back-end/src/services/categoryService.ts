import categoryModel from "../models/category.model";
import { EndpointRequest } from "../types";

const getAllCategories = async (url: EndpointRequest) => {
  const categories = await categoryModel.getAllCategories(url);
  return categories;
};

const getByCategory = async (url: EndpointRequest, q: string) => {
  const category = await categoryModel.getByCategory(url, q);
  return category;
};

export default { getAllCategories, getByCategory }