export default function cleanDataAttributes(data, path) {
  let idName = '';
  let strName = '';
  let thumb = '';

  if (path === 'meals') {
    idName = 'idMeal';
    strName = 'strMeal';
    thumb = 'strMealThumb';
  } else {
    idName = 'idDrink';
    strName = 'strDrink';
    thumb = 'strDrinkThumb';
  }

  if (data[path] === null) {
    data[path] = [];
    return data;
  }

  data[path].forEach((recipe) => {
    recipe.id = recipe[idName];
    recipe.str = recipe[strName];
    recipe.thumb = recipe[thumb];
  });

  return data;
}
