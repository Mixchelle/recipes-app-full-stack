import { useContext } from 'react';
import { AppContext } from '../context/AppProvider';

export default function useFavorite() {
  const { handleFavRecipesFilter } = useContext(AppContext);

  function recipeObjectCreator({ idMeal, idDrink,
    strMeal, strDrink,
    strMealThumb, strDrinkThumb,
    strArea = '',
    strCategory = '',
    strAlcoholic = '',
  }) {
    return {
      id: idMeal || idDrink,
      type: idMeal ? 'meal' : 'drink',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strMeal || strDrink,
      image: strMealThumb || strDrinkThumb,
    };
  }

  function toggleFavorite(recipe) {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') ?? '[]');
    const { idMeal, idDrink } = recipe;
    const id = idMeal || idDrink;
    let newFavoriteRecipes;

    if (!favoriteRecipes.some(({ id: recipeId }) => recipeId === id)) {
      newFavoriteRecipes = [...favoriteRecipes, recipeObjectCreator(recipe)];
    } else {
      newFavoriteRecipes = favoriteRecipes
        .filter(({ id: recipeId }) => recipeId !== id);
    }

    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
    handleFavRecipesFilter({ target: { name: 'all' } });
  }

  return {
    toggleFavorite,
    recipeObjectCreator,
  };
}
