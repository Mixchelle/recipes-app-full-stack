import fetch from 'node-fetch';

export interface Recipe {
  id: number;
  name: string;
  ingredients: string;
  category: string;
}

const url = 'https://www.thecocktaildb.com/api/json/v1/1/';

async function getAllRecipes() {
  const response = await fetch(url + 'search.php?s=');
  const data = await response.json();
  return data;
}

async function getRecipeByName(name: string) {
  const response = await fetch(url + 'search.php?s=' + name);
  const data = await response.json();
  return data;
}

async function getRecipesByFirstLetter(letter: string) {
  const response = await fetch(url + 'search.php?f=' + letter);
  const data = await response.json();
  return data;
}

export default { getAllRecipes, getRecipeByName, getRecipesByFirstLetter };
