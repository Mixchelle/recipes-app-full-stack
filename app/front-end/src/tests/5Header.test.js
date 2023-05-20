import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from './helpers/renderWithRouter';
import App from '../App';

describe('Testa o Header', () => {
  const pageTitle = 'page-title';
  test('Se o Header não é renderizado na página de Login', () => {
    renderWithRouter(<App />);
    const title = screen.queryByTestId(pageTitle);
    expect(title).not.toBeInTheDocument();
  });
  test('Se o Header é renderizado na página de Meals', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/meals');
    });
    const title = screen.getByTestId(pageTitle);
    expect(title).toBeInTheDocument();
  });
  test('Se o Header é renderizado na página de Drinks', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/drinks');
    });
    const title = screen.getByTestId(pageTitle);
    expect(title).toBeInTheDocument();
  });
  test('Se o Header é renderizado na página de Profile', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/profile');
    });
    const title = screen.getByTestId(pageTitle);
    expect(title).toBeInTheDocument();
  });
  test('Se o Header é renderizado na página de Done Recipes', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/done-recipes');
    });
    const title = screen.getByTestId(pageTitle);
    expect(title).toBeInTheDocument();
  });
  test('Se o Header é renderizado na página de Favorite Recipes', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/favorite-recipes');
    });
    const title = screen.getByTestId(pageTitle);
    expect(title).toBeInTheDocument();
  });
  test('Se a barra de pesquisa está oculta antes do click', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/meals');
    });
    const searchBar = screen.queryByTestId('search-input');
    expect(searchBar).not.toBeInTheDocument();
  });
  test('Se a barra de pesquisa é renderizada após o click', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/meals');
    });
    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);
    const searchBar = screen.queryByTestId('search-input');
    expect(searchBar).toBeInTheDocument();
  });
});
