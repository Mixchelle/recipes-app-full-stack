import PropTypes from 'prop-types';
import React, { createContext, useMemo, useState, useCallback } from 'react';
import useFetch from '../hooks/useFetch';
import useFilterRecipes from '../hooks/useFilterRecipes';


export default function AppProvider({ children }) {

  const [searchData, setSearchData] = useState([]);
  const { fetchData, fetchCategories, isLoading, setIsLoading } = useFetch();

  const [category, setCategory] = useState('all');

  const { filterRecipes } = useFilterRecipes();
  const [doneRecipes, setDoneRecipes] = useState(filterRecipes('all', 'done'));
  const [favRecipes, setFavRecipes] = useState(filterRecipes('all', 'fav'));

  const handleDoneRecipesFilter = useCallback(({ target: { name } }) => {
    setCategory(name);
    setDoneRecipes(filterRecipes(name, 'done'));
  }, [filterRecipes]);

  const handleFavRecipesFilter = useCallback(({ target: { name } }) => {
    setCategory(name);
    setFavRecipes(filterRecipes(name, 'fav'));
  }, [filterRecipes]);

  const handleUnfavorite = useCallback(({ target: { id } }) => {
    const savedRecipes = JSON.parse(localStorage.favoriteRecipes);
    const newFavorites = savedRecipes.filter((recipe) => recipe.id !== parseInt(id));

    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    console.log('save', savedRecipes, 'new,', newFavorites)
    console.log('click');
    const updatedFavorites = filterRecipes('all', 'fav'); // Atualiza a lista de favoritos
    setFavRecipes(updatedFavorites);
  //  window.location.reload(); // Recarregar a página
  }, [filterRecipes]);
  
  

  const values = useMemo(() => ({
    fetchData,
    fetchCategories,
    isLoading,
    setIsLoading,
    searchData,
    setSearchData,
    doneRecipes,
    handleDoneRecipesFilter,
    handleFavRecipesFilter,
    favRecipes,
    handleUnfavorite,
    category,
  }), [
    fetchData,
    fetchCategories,
    isLoading,
    searchData,
    setSearchData,
    doneRecipes,
    favRecipes,
    handleDoneRecipesFilter,
    handleFavRecipesFilter,
    handleUnfavorite,
    setIsLoading,
    category,
  ]);

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export const AppContext = createContext();
