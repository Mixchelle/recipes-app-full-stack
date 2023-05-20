import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { renderWithRouter } from './helpers/renderWithRouter';
import App from '../App';
import categoryMock from './mock/categoryMock';

describe('Testa a pagina Categories', () => {
  afterEach(() => jest.clearAllMocks());

  test('Se o fetch é chamado após o click no botao das categorias', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(categoryMock),
    });
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/meals');
    });

    const beefCategoryBtn = await screen.findByTestId('Beef-category-filter');
    act(() => {
      userEvent.click(beefCategoryBtn);
    });
    const allCategoriesBtn = screen.getByTestId('All-category-filter');
    act(() => {
      userEvent.click(allCategoriesBtn);
    });

    await new Promise((res) => { setTimeout(res, 100); });

    expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  });
});
