/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  Carousel,
  Container,
  Image,
  ListGroup,
  Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import useFavorite from '../hooks/useFavorite';
import { RecipesContext } from '../context/RecipesProvider';

const NUMBER_THIRTY_TWO = 32;

function RecipeDetails() {
  const history = useHistory();
  const location = useLocation();
  const id = location.search;
  const page = location.pathname.split('/')[1];
  const [copied, setCopied] = useState(false);
  const { toggleFavorite } = useFavorite();
  const {
    ingredients,
    recommended,
    getPageInfo,
    done,
    inProgress,
    favorite,
    setFavorite,
    checkRecipeStatus,
    recipe,
  } = useContext(RecipesContext);

  useEffect(() => {
    getPageInfo(id, page);
  }, [page, id]);

  useEffect(() => {
    checkRecipeStatus();
  }, [recipe]);

  const urlToEmbedUrl = (url) => `https://www.youtube.com/embed/${url.slice(NUMBER_THIRTY_TWO)}`;

  const handleClick = useCallback(() => {
    history.push(`${location.pathname}/in-progress`);
  }, [history, location]);

  const handleShare = useCallback(() => {
    copy(`http://localhost:3000${location.pathname}`);

    setCopied(true);
  }, [location]);

  const handleFavorite = useCallback(() => {
    setFavorite(!favorite);

    toggleFavorite(recipe[0]);
  }, [favorite, recipe, toggleFavorite]);
  console.log('RECEITA', recipe);
  return (
    <>
      { recipe.map(({
        id: idMeal,
        name: strMeal,
        image: strMealThumb,
        category: strCategory,
        alcohol: strAlcoholic = '',
        instructions: strInstructions = '',
        video: strYoutube = '',
        ingredients,
        measurement,
        // id: idDrink,
        // strDrink,
        // strDrinkThumb,
      }, index) => (
        (idMeal) && (
          <Container
            key={ `${idMeal}${index}` }
            className="pt-3 col-md-5 mx-auto"
          >
            <Row>
              <ButtonGroup className="mb-3">
                <Button
                  variant="secondary"
                  onClick={ () => history.push(idMeal ? '/meals' : '/drinks') }
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
                <Card.Title data-testid="recipe-title">{strMeal}</Card.Title>
                <Card.Subtitle
                  data-testid="recipe-category"
                  className="text-muted"
                >
                  {`${strCategory} ${strAlcoholic}`}
                </Card.Subtitle>
              </Card.Body>
              <Card.Img
                src={ strMealThumb}
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
                { ingredients.map((ingredient, i) => (
                  <ListGroup.Item
                    key={ `${ingredient} ${measurement[i]}` }
                    enabled="false"
                    as="li"
                  >
                    { ` ${ingredient} ${measurement[i]}` }
                  </ListGroup.Item>
                )) }
              </ListGroup>
            </Row>
            <Row>
              <h3>Instructions</h3>
              <p
                data-testid="instructions"
                className="mb-4"
              >
                { strInstructions }
              </p>
            </Row>
            { page === 'meals' && (
              <Row className="mb-4">
                <iframe
                  width="853"
                  height="480"
                  data-testid="video"
                  src={ urlToEmbedUrl(strYoutube) }
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write;
               encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </Row>
            ) }
            <Row
              className="pb-3 mb-5"
            >
              <h2>Recommendations</h2>
              <Carousel fade>
                { recommended.map(({
                  image: imageDrink,
                  // strMealThumb: imageMeal,
                  name: nameDrink,
                  // strMeal: nameMeal,
                  id: recipeId,
                }) => (
                  <Carousel.Item
                    key={ `recipes${recipeId}` }
                  >
                    <Image
                      className="d-block w-100"
                      src={ imageDrink }
                      alt={ nameDrink }
                      rounded
                    />
                    <Carousel.Caption>
                      <h3
                        data-testid={ `${recipeId}-recommendation-title` }
                        className="text-shadow"
                      >
                        { nameDrink }
                      </h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                )) }
              </Carousel>
            </Row>
            { !done && (
              <Row>
                <Button
                  className="button-done-recipe col-md-5"
                  variant="primary"
                  size="lg"
                  data-testid="start-recipe-btn"
                  fixed="bottom"
                  onClick={ handleClick }
                >
                  { inProgress ? 'Continue Recipe' : 'Start Recipe'}
                </Button>
              </Row>
            ) }
          </Container>
        )
      )) }
    </>
  );
}

export default RecipeDetails;
