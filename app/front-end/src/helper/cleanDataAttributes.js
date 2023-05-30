export default function cleanDataAttributes(data, path) {
  let idName = '';
  let strName = '';
  let thumb = '';

  if (path === 'meals') {
    idName = 'id';
    strName = 'name';
    thumb = 'image';
  } else {
    idName = 'id';
    strName = 'name';
    thumb = 'image';
  }

  if (data[path] === null) {
    data[path] = [];
    return data;
  }

  data.forEach((recipe) => {
    recipe.id = recipe[idName];
    recipe.name = recipe[strName];
    recipe.image = recipe[thumb];
  });

  return data;
}
