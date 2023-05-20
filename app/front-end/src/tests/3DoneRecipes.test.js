import { screen } from '@testing-library/react';
import { renderWithRouter } from './helpers/renderWithRouter';
import mockDoneRecipes from './mock/recipesMock';
import App from '../App';

const initialEntries = ['/done-recipes'];

describe('Testes da tela doneRecipes', () => {
  beforeEach(() => {
    window.localStorage.setItem('doneRecipes', JSON.stringify(mockDoneRecipes));
  });

  afterEach(() => window.localStorage.clear());

  test('Se os elementos corretos são renderizados', () => {
    renderWithRouter(<App />, { initialEntries });

    const filterAllBtn = screen.getByRole('button', { name: /all/i });
    const filterMealBtn = screen.getByRole('button', { name: /meals/i });
    const filterDrinkBtn = screen.getByRole('button', { name: /drinks/i });

    const recipeImgEl = screen.getByAltText(/image of spicy arrabiata penne/i);
    const recipeNameEl = screen.getByText(/margarita/i);
    const recipeCategoryEl = screen.getByText(/alcoholic - ordinary drink/i);
    const recipeDoneDateEl = screen.getByText('20/02/2021');
    const recipeFirstTagEl = screen.getByText(/pasta/i);
    const recipeSecondTagEl = screen.getByText(/curry/i);
    const recipeShareBtn = screen.getAllByAltText(/share/i)[0];

    expect(filterAllBtn).toBeInTheDocument();
    expect(filterMealBtn).toBeInTheDocument();
    expect(filterDrinkBtn).toBeInTheDocument();
    expect(recipeImgEl).toBeInTheDocument();
    expect(recipeNameEl).toBeInTheDocument();
    expect(recipeCategoryEl).toBeInTheDocument();
    expect(recipeDoneDateEl).toBeInTheDocument();
    expect(recipeFirstTagEl).toBeInTheDocument();
    expect(recipeSecondTagEl).toBeInTheDocument();
    expect(recipeShareBtn).toBeInTheDocument();
  });
});
