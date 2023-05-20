import React, { useContext } from 'react';
import { Button, ButtonGroup, Container, Row } from 'react-bootstrap';
import CardDoneRecipe from '../components/CardDoneRecipe';
import { AppContext } from '../context/AppProvider';

function FavoriteRecipes() {
  const { handleFavRecipesFilter, category } = useContext(AppContext);

  return (
    <Container className="pb-5 mb-4 col-md-5 mx-auto">
      <Row>
        <ButtonGroup
          size="sm"
          className="mb-2"
        >
          <Button
            variant="outline-dark"
            data-testid="filter-by-all-btn"
            name="all"
            onClick={ handleFavRecipesFilter }
            active={ category === 'all' }
          >
            All
          </Button>
          <Button
            variant="outline-dark"
            data-testid="filter-by-meal-btn"
            name="meal"
            onClick={ handleFavRecipesFilter }
            active={ category === 'meal' }
          >
            Meals
          </Button>
          <Button
            variant="outline-dark"
            data-testid="filter-by-drink-btn"
            name="drink"
            onClick={ handleFavRecipesFilter }
            active={ category === 'drink' }
          >
            Drinks
          </Button>
        </ButtonGroup>
      </Row>
      <CardDoneRecipe page="fav" />
    </Container>
  );
}

export default FavoriteRecipes;
