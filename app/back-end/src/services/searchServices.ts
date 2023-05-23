import Model, { Recipe } from '../models/searchModel';

 async function getAllRecipes(): Promise<Recipe[]> {
  const result = await Model.getAllRecipes()
  return result;
}

 async function getRecipeByName(name: string): Promise<Recipe[]> {
const result = await Model.getRecipeByName(name);
return result;
}

async function getRecipesByFirstLetter(letter: string): Promise<Recipe[]> {
  const result = await Model.getRecipesByFirstLetter(letter);
  return result;
}

export default { getAllRecipes, getRecipeByName, getRecipesByFirstLetter };