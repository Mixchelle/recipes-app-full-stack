import areaModel from "../models/area.model";

const getAll = async () => {
  const response = await areaModel.getAll();
  return response;
};

const getByArea = async (ingredient: string) => {
  const response = areaModel.getByArea(ingredient)
  return response;
};

export default { 
  getAll,
  getByArea
}