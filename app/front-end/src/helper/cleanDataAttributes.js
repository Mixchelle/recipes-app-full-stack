export default function cleanDataAttributes(data, _path) {
  let idName = 'id';
  let strName = 'name';
  let thumb = 'image';

  // if (path === 'meals') {
  //   idName = 'id';
  //   strName = 'name';
  //   thumb = 'image';
  // } else {
  //   idName = 'id';
  //   strName = 'name';
  //   thumb = 'image';
  // }

  if (data === null) {
    data = [];
    return data;
  }

  data.forEach((recipe) => {
    recipe.id = recipe[idName];
    recipe.name = recipe[strName];
    recipe.image = recipe[thumb];
  });

  return data;
}
