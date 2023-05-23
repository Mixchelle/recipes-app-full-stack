import Model, { Recipe } from '../models/searchModel';

async function getAllRecipes() {
  const result = await Model.getAllRecipes();
  if (!result) return { message: 'Erro ao carregar a API' };
  return result;
}

async function getRecipeByName(name: string) {
  const result = await Model.getRecipeByName(name);
  if (!result) return { message: 'Erro ao carregar a API' };
  return result;
}

async function getRecipesByFirstLetter(letter: string) {
  const result = await Model.getRecipesByFirstLetter(letter);
  if (!result) return { message: 'Erro ao carregar a API' };
  return result;
}

export default { getAllRecipes, getRecipeByName, getRecipesByFirstLetter };
