const getRecipesDrinks = `SELECT dr.*, JSON_ARRAYAGG(di.name) AS ingredients, ca.name as category
FROM drinks_recipes as dr
JOIN recipes_ingredients as ri ON dr.id = ri.recipe_id
JOIN drinks_ingredients as di ON di.id = ri.ingredient_id
JOIN drinks_categories as ca ON dr.category_id = ca.id`;

const getRecipesMeals = `SELECT mr.*, JSON_ARRAYAGG(mi.name) AS ingredients, ca.name as category
FROM meals_recipes as mr
JOIN meals_recipes_ingredients as ri ON mr.id = ri.recipe_id
JOIN meals_ingredients as mi ON mi.id = ri.ingredient_id
JOIN meals_categories as ca ON mr.category_id = ca.id`;

export default {
  getRecipesDrinks,
  getRecipesMeals,
};
