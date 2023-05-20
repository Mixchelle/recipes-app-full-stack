import { screen } from '@testing-library/react';
import { renderWithRouter } from './helpers/renderWithRouter';
import App from '../App';

describe('Testa o footer', () => {
  const initialEntries = ['/meals'];

  test('Testa o Footer', () => {
    renderWithRouter(<App />, { initialEntries });
    const iconDrinks = screen.getByTestId('drinks-bottom-btn');
    const iconMeals = screen.getByTestId('meals-bottom-btn');

    expect(iconDrinks).toBeInTheDocument();
    expect(iconMeals).toBeInTheDocument();
  });
});
