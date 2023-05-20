import { useState } from 'react';

export default function useHeader() {
  const [visible, setVisible] = useState(true);
  const [searchVisible, setSearchVisible] = useState(true);
  const [pageTitle, setTitle] = useState('');

  const getHeaderInfo = (location) => {
    switch (location.pathname) {
    case '/meals':
      setVisible(true);
      setSearchVisible(true);
      setTitle('Meals');
      break;
    case '/drinks':
      setVisible(true);
      setSearchVisible(true);
      setTitle('Drinks');
      break;
    case '/profile':
      setVisible(true);
      setSearchVisible(false);
      setTitle('Profile');
      break;
    case '/done-recipes':
      setVisible(true);
      setSearchVisible(false);
      setTitle('Done Recipes');
      break;
    case '/favorite-recipes':
      setVisible(true);
      setSearchVisible(false);
      setTitle('Favorite Recipes');
      break;
    default:
      setVisible(false);
    }
  };

  return {
    getHeaderInfo,
    visible,
    searchVisible,
    pageTitle,
  };
}
