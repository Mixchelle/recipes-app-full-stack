export default function useFilterRecipes() {
  const filterRecipes = (type, page) => {
    let recipes;

    switch (page) {
    case 'done':
      if (!localStorage.doneRecipes) break;
      recipes = JSON.parse(localStorage.doneRecipes);
      break;
    case 'fav':
      if (!localStorage.favoriteRecipes) break;
      recipes = JSON.parse(localStorage.favoriteRecipes);
      break;
    default:
      break;
    }

    if (type === 'all') return recipes;

    const filteredRecipesArr = recipes.filter(
      (obj) => Object.keys(obj)
        .some(
          (key) => obj[key]
            .includes(type),
        ),
    );
    return filteredRecipesArr;
  };

  return {
    filterRecipes,
  };
}
