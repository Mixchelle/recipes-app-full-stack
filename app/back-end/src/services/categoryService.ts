import categoryModel from "../models/category.model";

const getAllCategories = async () => {
  const categories = await categoryModel.getAllCategories();
  return categories;
};

const getByCategory = async (q: string) => {
  const category = await categoryModel.getByCategory(q);
  return category;
};

export default { getAllCategories, getByCategory }