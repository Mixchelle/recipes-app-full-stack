import { useState } from 'react';

export default function useFooter() {
  const [visible, setVisible] = useState(false);

  const setVisibility = (location) => {
    switch (location.pathname) {
    case '/meals':
    case '/drinks':
    case '/profile':
    case '/done-recipes':
    case '/favorite-recipes':
      setVisible(true);
      break;
    default:
      setVisible(false);
    }
  };

  return { visible, setVisibility };
}
