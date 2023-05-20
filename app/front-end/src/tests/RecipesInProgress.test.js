import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, waitFor, act } from '@testing-library/react';
import { renderWithRouter } from './helpers/renderWithRouter';

import App from '../App';
import oneMeal from '../../cypress/mocks/oneMeal';
import oneDrink from '../../cypress/mocks/oneDrink';

import drinks from '../../cypress/mocks/drinks';
import meals from '../../cypress/mocks/meals';

const MEALS_ROUTE = { initialEntries: ['/meals/52771/in-progress'] };
const DRINK_ROUTE = { initialEntries: ['/drinks/15997/in-progress'] };
const FAVORITE_BTN = 'favorite-btn';
const BTN_FINISH = 'finish-recipe-btn';

describe('testa o Component RecipeDEtails/MealsDetails', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch');
    global.fetch
      .mockResolvedValue({
        json: jest.fn().mockResolvedValueOnce(oneMeal).mockResolvedValue(drinks),
      });
  });
  afterEach(() => {
    localStorage.clear();
  });

  navigator.clipboard = {
    writeText: jest.fn(),
  };

  test('testa se o componente é renderizado corretamente', async () => {
    renderWithRouter(<App />, MEALS_ROUTE);
    const recipeImg = await screen.findByTestId('recipe-photo');
    const btnFinish = screen.getByTestId(BTN_FINISH);
    const recipeTitle = screen.getByTestId('recipe-title');
    const buttonFavorites = screen.getByTestId(FAVORITE_BTN);
    const recipeCategory = screen.getByTestId('recipe-category');
    const instructions = screen.getByTestId('instructions');

    expect(recipeImg).toBeInTheDocument();
    expect(recipeTitle).toBeInTheDocument();
    expect(buttonFavorites).toBeInTheDocument();
    expect(recipeCategory).toBeInTheDocument();
    expect(instructions).toBeInTheDocument();
    expect(btnFinish).toBeInTheDocument();
  });

  test('testa o botao de compartilhar', async () => {
    renderWithRouter(<App />, MEALS_ROUTE);
    const buttonShare = await screen.findByTestId('share-btn');
    expect(buttonShare).toBeInTheDocument();
    userEvent.click(buttonShare);
    const linkCopied = await screen.findByText(/Link copied!/i);
    expect(linkCopied).toBeInTheDocument();
  });

  test('Testa se salva no localStorage', async () => {
    localStorage.setItem('doneRecipes', '[{"id":"52478"}]');
    renderWithRouter(<App />, MEALS_ROUTE);

    const favoriteBtn = await screen.findByTestId(FAVORITE_BTN);
    expect(favoriteBtn).toBeInTheDocument();
    userEvent.click(favoriteBtn);
    const favoriteFromLocalStorage = localStorage.getItem('favoriteRecipes');
    const favorites = JSON.parse(favoriteFromLocalStorage);
    expect(favorites).toHaveLength(1);
  });

  test('Testa se deleta ao clicar no botão', async () => {
    localStorage.setItem('favoriteRecipes', '[{"id":"52771","type":"meal","nationality":"Italian","category":"Vegetarian","alcoholicOrNot":"","name":"Spicy Arrabiata Penne","image":"https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"}]');
    renderWithRouter(<App />, MEALS_ROUTE);

    const favoriteBtn = await screen.findByTestId(FAVORITE_BTN);
    expect(favoriteBtn).toBeInTheDocument();
    userEvent.click(favoriteBtn);
    const favoriteFromLocalStorage = localStorage.getItem('favoriteRecipes');
    const favorites = JSON.parse(favoriteFromLocalStorage);
    expect(favorites).toHaveLength(0);
  });

  test('testa se é possível marcar ingredientes como concluídos e devem permanecer marcados entre reloads', async () => {
    renderWithRouter(<App />, MEALS_ROUTE);
    let ingredientes;
    await waitFor(() => {
      ingredientes = screen.getAllByTestId(/-ingredient-step/i);
    });
    const button = screen.getByTestId(BTN_FINISH);
    expect(ingredientes).toHaveLength(8);

    expect(button).toBeDisabled();

    ingredientes.forEach((el) => {
      act(() => {
        userEvent.click(el);
      });
    });

    // renderWithRouter(<App />, MEALS_ROUTE);
    window.location.reload();

    await waitFor(() => {
      ingredientes = screen.getAllByTestId(/-ingredient-step/i);
    });

    expect(ingredientes).toHaveLength(8);

    ingredientes.forEach((el) => {
      expect(el.firstChild).toBeChecked();
    });

    expect(button).toBeEnabled();

    userEvent.click(button);

    const doneRecipesTitle = screen.getByText(/done recipes/i);

    expect(doneRecipesTitle).toBeInTheDocument();
  });
});

describe('Testa o componente Drinks', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch');
    global.fetch
      .mockResolvedValue({
        json: jest.fn().mockResolvedValueOnce(oneDrink).mockResolvedValue(meals),
      });
  });
  afterEach(() => {
    localStorage.clear();
  });

  navigator.clipboard = {
    writeText: jest.fn(),
  };

  test('testa se o componente é renderizado corretamente', async () => {
    renderWithRouter(<App />, DRINK_ROUTE);
    const recipeImg = await screen.findByTestId('recipe-photo');

    const recipeTitle = screen.getByTestId('recipe-title');
    const buttonFavorites = screen.getByTestId(FAVORITE_BTN);
    const recipeCategory = screen.getByTestId('recipe-category');
    const instructions = screen.getByTestId('instructions');

    expect(recipeImg).toBeInTheDocument();
    expect(recipeTitle).toBeInTheDocument();
    expect(buttonFavorites).toBeInTheDocument();
    expect(recipeCategory).toBeInTheDocument();
    expect(instructions).toBeInTheDocument();
  });

  test('Testa se salva no localStorage', async () => {
    localStorage.setItem('doneRecipes', '[{"id":"52478"}]');
    renderWithRouter(<App />, DRINK_ROUTE);

    const favoriteBtn = await screen.findByTestId(FAVORITE_BTN);
    expect(favoriteBtn).toBeInTheDocument();

    userEvent.click(favoriteBtn);
    const favoriteFromLocalStorage = localStorage.getItem('favoriteRecipes');
    const favorites = JSON.parse(favoriteFromLocalStorage);
    expect(favorites).toHaveLength(1);
  });

  test('testa se é possível marcar ingredientes como concluídos e devem permanecer marcados entre reloads', async () => {
    renderWithRouter(<App />, DRINK_ROUTE);
    let ingredientes;
    await waitFor(() => {
      ingredientes = screen.getAllByTestId(/-ingredient-step/i);
    });
    const button = screen.getByTestId(BTN_FINISH);
    expect(ingredientes).toHaveLength(3);

    expect(button).toBeDisabled();

    ingredientes.forEach((el) => {
      act(() => {
        userEvent.click(el);
      });
    });

    // renderWithRouter(<App />, DRINK_ROUTE);
    window.location.reload();

    await waitFor(() => {
      ingredientes = screen.getAllByTestId(/-ingredient-step/i);
    });

    expect(ingredientes).toHaveLength(3);

    ingredientes.forEach((el) => {
      expect(el.firstChild).toBeChecked();
    });

    expect(button).toBeEnabled();

    userEvent.click(button);

    const doneRecipesTitle = screen.getByText(/done recipes/i);

    expect(doneRecipesTitle).toBeInTheDocument();
  });
});
