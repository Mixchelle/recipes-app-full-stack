import { useState } from 'react';

const PAGE_URL = 'https://localhost:3001';

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);

  const fetchAPI = async (url) => {
    const response = await fetch(url);
    const json = await response.json();

    return json;
  };
  const [errors, setErrors] = useState(null);

  const fetchData = async (pageName, radioOption, input) => {
    setIsLoading(true);
    let url;
    const urlType = `${PAGE_URL}/${pageName}`;

    switch (radioOption) {
    case 'ingredient':
      url = `${urlType}/ingredients?q=${input}`;
      break;
    case 'name':
      url = `${urlType}/name?q=${input}`;
      break;
    case 'first-letter':
      url = `${urlType}/letter?q=${input}`;
      break;
    case 'category':
      url = `${urlType}/category?q=${input}`;
      break;
    default:
      url = '';
    }

    setIsLoading(false);

    return fetchAPI(url);
  };

  const fetchCategories = (pageName) => fetchAPI(`${PAGE_URL}/${pageName}/categories`);

  const fetchRecipe = async (pageName, id) => {
    try {
      setIsLoading(true);

      const url = `${PAGE_URL}/${pageName}/${id}`;

      const response = await fetch(url);
      const json = await response.json();

      setIsLoading(false);

      return json;
    } catch (error) {
      setErrors(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchData,
    fetchCategories,
    fetchRecipe,
    isLoading,
    setIsLoading,
    errors,
  };
}
