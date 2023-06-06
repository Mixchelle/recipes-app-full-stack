import React, { useContext, useCallback, useEffect, useState } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppProvider';
import cleanDataAttributes from '../helper/cleanDataAttributes';

export default function Categories() {
  const { fetchCategories, fetchData, setSearchData } = useContext(AppContext);
  const [categoriesList, setCategories] = useState([]);
  const location = useLocation();
  const [selectedCategory, setCategory] = useState('All');

  const pageName = location.pathname;

  const onClickHandler = useCallback(async ({ target: { value } }) => {
    let strCategory = value;
    let data;
    if (strCategory === 'All' || strCategory === selectedCategory) {
      strCategory = 'All';
      data = await fetchData(pageName, 'name', '');
    } else {
      data = await fetchData(pageName, 'category', strCategory);
    }
    const path = location.pathname.replace('/', '');
    const cleanData = cleanDataAttributes(data, path);
    setSearchData(cleanData);
    setCategory(strCategory);
  }, [pageName, selectedCategory]);

  useEffect(() => {
    const setCategoriesList = async () => {
      const categories = await fetchCategories(pageName);
      // const path = location.pathname.replace('/', '');
      // if (!categories[path]) return;
      // const FIVE = 6;
      const categoriesNew = categories.map(({name}) => ({name}));
      categoriesNew.splice(0, 0, { name: 'All' });
      setCategories(categoriesNew.slice(0, 5));
    };
    setCategoriesList();
  }, [fetchCategories, pageName, location]);

  return (
    <Container className="text-center">
      <ButtonGroup
        size="sm"
        className="mb-3 col-md-5 mx-auto"
      >
        {
          categoriesList.map(({ name: strCategory }) => (
            <Button
              key={ `cat-${strCategory}` }
              variant="outline-dark"
              data-testid={ `${strCategory}-category-filter` }
              onClick={ (event) => { onClickHandler(event); } }
              value={ strCategory }
              active={ selectedCategory === strCategory }
              size="sm"
              style={ { fontSize: '12px' } }
            >
              {strCategory}
            </Button>
          ))
        }
      </ButtonGroup>

    </Container>
  );
}
