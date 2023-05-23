import Connection from "../database/connection";

export interface Recipe {
  id: number;
  name: string;
  ingredientes: string;
  categoria: string;
}

 async function getAllRecipes(): Promise<Recipe[]> {
  const db = await Connection.execute(); 
  const result = await db.query('SELECT * FROM RECIPES_APP');
  return result.rows;
}

 async function getRecipeByName(name: string): Promise<Recipe[]> {
  const db = await Connection.execute();
  const result = await db.query('SELECT * FROM RECIPES_APP WHERE name = $1', [name]);
  return result.rows;
}

async function getRecipesByFirstLetter(letter: string): Promise<Recipe[]> {
  const db = await Connection.execut();
  const result = await db.query('SELECT * FROM RECIPES_APP WHERE name ILIKE $1', [`${letter}%`]);
  return result.rows;
}

export default { getAllRecipes, getRecipeByName, getRecipesByFirstLetter };


