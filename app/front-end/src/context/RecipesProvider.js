import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import useFetch from '../hooks/useFetch';

export const RecipesContext = createContext();

const NUMBER_SIX = 6;

function RecipesProvider({ children }) {
  const { fetchRecipe, fetchData } = useFetch();

  const [ingredients, setIngredients] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [recipe, setRecipe] = useState([{}]);
  const [done, setDone] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [page, setPage] = useState('');
  const [id, setId] = useState('');

  const getPageInfo = useCallback((pageId, pageName) => {
    setId(pageId);
    setPage(pageName);
  }, []);

  useEffect(() => {
    // const getValidIngredients = (str) => Object.entries(recipe[0])
    //   .filter((entry) => entry[0].includes(str))
    //   .filter((entry) => entry[1]);
    const ingredientsArray = () => {
      // const measure = getValidIngredients('strMeasure');
      // const ingredient = getValidIngredients('strIngredient');
      const measure = recipe[0].measurement;
      const ingredient = recipe[0].ingredients;

      return ingredient.map((data, index) => ({
        ingredient: data,
        measure: measure[index] === null ? '' : measure[index],
        id: index,
        checked: false,
      }));
    };
    if (!page) return;

    const inProgressRecipes = JSON.parse(localStorage
      .getItem('inProgressRecipes') || '{}');
    if (!inProgressRecipes[page]) inProgressRecipes[page] = {};

    let newIngredients = ingredientsArray();
    if (inProgressRecipes[page][id]) {
      newIngredients = newIngredients
        .map((ingredient) => ({
          ...ingredient,
          checked: inProgressRecipes[page][id]
            .some((name) => name === ingredient.ingredient),
        }));
    }

    setIngredients(newIngredients);
  }, [recipe]);

  useEffect(() => {
    const getRecipe = async () => {
      if (!page) return;
      const data = await fetchRecipe(page === 'drinks' ? 'drinks' : 'meals', id);

      setRecipe(data);

    };
    getRecipe();
  }, [id, page]);

  const idChecker = useCallback((key, idRecipe) => {
    const response = JSON
      .parse(localStorage.getItem(key) ?? '[]');

    return response
      .some(({ id: recipeId }) => recipeId === idRecipe);
  }, []);

  const checkRecipeStatus = useCallback(() => {
    const { id: idRecipe } = recipe[0];

    setDone(idChecker('doneRecipes', idRecipe));

    setFavorite(idChecker('favoriteRecipes', idRecipe));

    const inProgressRecipes = JSON
      .parse(localStorage.getItem('inProgressRecipes') ?? '{}');
    const isInProgress = Object.values(inProgressRecipes)
      .some((type) => Object.keys(type)
        .some((recipeId) => recipeId === idRecipe));

    setInProgress(isInProgress);
  }, [idChecker, recipe]);

  useEffect(() => {
    const getRecommendedRecipes = async () => {
      if (!page) return;
      const options = [page === 'drinks' ? '/meals' : '/drinks', 'name', ''];
      // const key = page === 'drinks' ? '/meals' : '/drinks';

      const data = (await fetchData(...options));
      const slicedData = data.slice(0, NUMBER_SIX)
        .map((rec, index) => ({ ...rec, id: index }));

      setRecommended(
        slicedData,
      );
    };
    getRecommendedRecipes();
  }, [page]);

  const value = useMemo(() => ({
    ingredients,
    setIngredients,
    recommended,
    done,
    inProgress,
    favorite,
    setFavorite,
    checkRecipeStatus,
    recipe,
    getPageInfo,
  }), [ingredients, recommended, done, inProgress, favorite,
    checkRecipeStatus, recipe, setIngredients, getPageInfo]);

  return (
    <RecipesContext.Provider value={ value }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {}.isRequired;

export default RecipesProvider;
