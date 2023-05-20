import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button, Container, Row, ListGroup, ButtonGroup, Card } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import useFavorite from '../hooks/useFavorite';
import { RecipesContext } from '../context/RecipesProvider';
import { AppContext } from '../context/AppProvider';
import '../styles/Recipe.css';

function RecipeInProgress() {
  const history = useHistory();
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const page = location.pathname.split('/')[1];
  const [copied, setCopied] = useState(false);
  const { toggleFavorite } = useFavorite();
  const [btnEnabled, setBtnEnabled] = useState(false);

  const {
    favorite,
    setFavorite,
    checkRecipeStatus,
    recipe,
    ingredients,
    setIngredients,
    getPageInfo,
  } = useContext(RecipesContext);

  const { handleDoneRecipesFilter } = useContext(AppContext);

  useEffect(() => {
    getPageInfo(id, page);
  }, [page, id, getPageInfo]);

  useEffect(() => {
    checkRecipeStatus();
  }, [recipe, checkRecipeStatus]);

  const doneRecipeObjectBuild = useCallback(() => {
    const {
      strArea,
      strCategory,
      strAlcoholic,
      strMeal,
      strDrink,
      strMealThumb,
      strDrinkThumb,
      strTags,
    } = recipe[0];

    return {
      id,
      type: page.slice(0, page.length - 1),
      nationality: strArea || '',
      category: strCategory || '',
      alcoholicOrNot: strAlcoholic || '',
      name: strMeal || strDrink,
      image: strMealThumb || strDrinkThumb,
      doneDate: new Date(),
      tags: strTags ? strTags.split(',') : [],
    };
  }, [id, page, recipe]);

  const handleClick = useCallback(() => {
    const a = JSON.parse(localStorage.getItem('doneRecipes') || '[]');
    localStorage.setItem('doneRecipes', JSON.stringify([...a, doneRecipeObjectBuild()]));
    handleDoneRecipesFilter({ target: { name: 'all' } }); // Atualiza state
    history.push('/done-recipes');
  }, [doneRecipeObjectBuild, history]);

  const handleShare = useCallback(() => {
    const link = history.location.pathname.replace('/in-progress', '');
    copy(`http://localhost:3000${link}`);

    setCopied(true);
  }, [history]);

  const handleFavorite = useCallback(() => {
    setFavorite(!favorite);

    toggleFavorite(recipe[0]);
  }, [favorite, recipe, toggleFavorite]);

  const setLocalStorage = (array) => {
    const a = JSON.parse(localStorage.getItem('inProgressRecipes') || '{}');

    if (!a[page]) a[page] = {};
    a[page][id] = array
      .filter(({ checked }) => checked)
      .map(({ ingredient }) => ingredient);

    localStorage.setItem('inProgressRecipes', JSON.stringify(a));
  };

  const handleCheck = ((index) => {
    const newIngredients = ingredients.map((ingredient) => (ingredient.id === index
      ? ({
        ...ingredient,
        checked: !ingredient.checked,
      })
      : ingredient));

    setIngredients(newIngredients);

    setLocalStorage(newIngredients);
  });

  useEffect(() => {
    const ingredientsDone = ingredients.filter(({ checked }) => checked);

    setBtnEnabled(ingredientsDone.length === ingredients.length);
  }, [ingredients]);

  return (
    <>
      { recipe.map(({
        idMeal,
        strMeal,
        strMealThumb,
        strCategory,
        strAlcoholic = '',
        strInstructions = '',
        idDrink,
        strDrink,
        strDrinkThumb,
      }, index) => (
        (idMeal || idDrink) && (
          <Container
            key={ `${idMeal || idDrink}${index}` }
            className="mt-5 pt-4 col-md-5 mx-auto"
          >
            <Container
              style={ { position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                textAlign: 'center',
                fontWeight: 'bold',
                backgroundColor: '#007bff',
                color: 'white',
                zIndex: 100,
              } }
            >
              <div className="mb-2 mt-2">
                Selecione os ingredientes que você já preparou.
              </div>
            </Container>
            <Row>
              <ButtonGroup className="mb-3">
                <Button
                  variant="secondary"
                  onClick={ () => history.push(
                    `${idMeal ? '/meals/' : '/drinks/'}${idMeal || idDrink}`,
                  ) }
                >
                  Back
                </Button>
                <Button
                  data-testid="share-btn"
                  onClick={ handleShare }
                  src={ shareIcon }
                  variant="info"
                >
                  <img src={ shareIcon } alt="Share Icon" />
                </Button>

                { copied && <p>Link copied!</p> }

                <Button
                  data-testid="favorite-btn"
                  onClick={ handleFavorite }
                  src={ favorite ? blackHeartIcon : whiteHeartIcon }
                >
                  <img
                    src={ favorite ? blackHeartIcon : whiteHeartIcon }
                    alt="Heart Icon"
                  />
                </Button>
              </ButtonGroup>
            </Row>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title data-testid="recipe-title">{strMeal || strDrink}</Card.Title>
                <Card.Subtitle
                  data-testid="recipe-category"
                  className="text-muted"
                >
                  {`${strCategory} ${strAlcoholic}`}
                </Card.Subtitle>
              </Card.Body>
              <Card.Img
                src={ strMealThumb || strDrinkThumb }
                data-testid="recipe-photo"
                variant="bottom"
              />

            </Card>
            <Row>
              <ListGroup
                as="ul"
                className="px-3 mb-3"
              >
                <ListGroup.Item
                  as="li"
                  className="text-bold"
                  variant="secondary"
                >
                  Ingredients
                </ListGroup.Item>
                { ingredients.map((
                  { ingredient, measure, id: ingIndex, checked },
                ) => (
                  <ListGroup.Item
                    key={ `${ingredient}${measure}` }
                    enabled="false"
                    as="li"
                    action
                    active={ checked }
                    onClick={ () => handleCheck(ingIndex) }

                  >
                    { ` ${ingredient} ${measure}` }

                  </ListGroup.Item>
                )) }
              </ListGroup>
            </Row>
            <Row className="pb-3 mb-5">
              <h3>Instructions</h3>
              <div data-testid="instructions">
                {/* {
                  strInstructions.split('STEP')
                    .filter((_, i) => i)
                    .map((step, i) => (
                      <p key={ `step-${i}` }>{ `STEP${step}` }</p>
                    ))
                } */}
                { strInstructions }
              </div>
            </Row>
            <Row>
              <Button
                className="button-done-recipe col-md-5 mx-auto"
                variant="success"
                size="lg"
                data-testid="finish-recipe-btn"
                fixed="bottom"
                disabled={ !btnEnabled }
                onClick={ handleClick }
              >
                Finish Recipe
              </Button>
            </Row>
          </Container>
        )
      )) }
    </>
  );
}

export default RecipeInProgress;
