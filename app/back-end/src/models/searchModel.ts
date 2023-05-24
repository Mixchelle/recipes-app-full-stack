import fetch from 'node-fetch';
import { ApiUrlType } from '../types';
import connection from './db/connection';

export interface Recipe {
  id: number;
  name: string;
  ingredients: string;
  category: string;
}



async function getAllRecipes(endpoint: ApiUrlType) {
//   const query = `
//   SELECT dr.*, ri.*
//   FROM drinks_recipes dr
//   JOIN recipes_ingredients ri ON dr.id = ri.recipe_id
// `;
//   const data = await connection.execute(query);

  const url = `https://www.the${endpoint}db.com/api/json/v1/1/`;
  const response = await fetch(`${url}search.php?s=`);
  const data = await response.json();
  return data;
}

async function getRecipeByName(endpoint: ApiUrlType, name: string) {
//   const query = `
//   SELECT dr.*, ri.*
//   FROM drinks_recipes dr
//   JOIN recipes_ingredients ri ON dr.id = ri.recipe_id
//   WHERE dr.name = '${name}'
// `;
//   const data = await connection.execute(query);
const url = `https://www.the${endpoint}db.com/api/json/v1/1/`
  const response = await fetch(`${url}search.php?s=${name}`);
  const data = await response.json();
  return data;
}

async function getRecipesByFirstLetter(endpoint: ApiUrlType, letter: string) {
//   const query = `
//   SELECT dr.*, ri.*
//   FROM drinks_recipes dr
//   JOIN recipes_ingredients ri ON dr.id = ri.recipe_id
//   WHERE SUBSTRING(dr.name, 1, 1) = '${letter}'
// `;
// const data = await connection.execute(query);
const url = `https://www.the${endpoint}db.com/api/json/v1/1/`
  const response = await fetch(`${url}search.php?f=${letter}`);
  const data = await response.json();
  return data;
}

export default { getAllRecipes, getRecipeByName, getRecipesByFirstLetter };
