import { useContext } from 'react';
import { AppContext } from '../context/AppProvider';

export default function useFavorite() {
  const { handleFavRecipesFilter } = useContext(AppContext);

  function recipeObjectCreator({ 
    id,
    name,
    image,
    area_id: strArea = '',
    category: strCategory = '',
    alcohol: strAlcoholic = '',
  }) {
    return {
      id,
      type: strAlcoholic ? 'drinks' : 'meals',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name,
      image,
    };
  }

  function toggleFavorite(recipe) {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') ?? '[]');
    const { id } = recipe;
    // const id = idMeal || idDrink;
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
