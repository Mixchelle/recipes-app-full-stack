import categoryModel from "../models/categoryModel";

const getAllCategories = async () => {
  const categories = await categoryModel.getAllCategories;
  return categories;
};

export default { getAllCategories }