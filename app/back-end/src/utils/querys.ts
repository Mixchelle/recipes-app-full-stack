const getRecipesDrinks = `SELECT dr.*, JSON_ARRAYAGG(di.name) AS ingredients, 
JSON_ARRAYAGG(ri.measurement) as measurement,
ca.name as category FROM drinks_recipes as dr
JOIN recipes_ingredients as ri ON dr.id = ri.recipe_id
JOIN drinks_ingredients as di ON di.id = ri.ingredient_id
JOIN drinks_categories as ca ON dr.category_id = ca.id`;

const getRecipesMeals = `SELECT mr.*, JSON_ARRAYAGG(mi.name) AS ingredients,
JSON_ARRAYAGG(ri.measurement) as measurement,
ca.name as category FROM meals_recipes as mr
JOIN meals_recipes_ingredients as ri ON mr.id = ri.recipe_id
JOIN meals_ingredients as mi ON mi.id = ri.ingredient_id
JOIN meals_categories as ca ON mr.category_id = ca.id`;

const getRecipeByArea = `SELECT mr.*, ma.name as area, mc.name as category,
JSON_ARRAYAGG(mi.name) AS ingredients, 
JSON_ARRAYAGG(ri.measurement) as measurement FROM meals_recipes as mr
JOIN meals_areas as ma ON ma.id = mr.area_id 
JOIN meals_categories as mc ON mc.id = mr.category_id
JOIN meals_recipes_ingredients as ri ON mr.id = ri.recipe_id
JOIN meals_ingredients as mi ON mi.id = ri.ingredient_id
WHERE ma.name = ? GROUP BY mr.id`;

export default {
  getRecipesDrinks,
  getRecipesMeals,
  getRecipeByArea,
};
