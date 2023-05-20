import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from './helpers/renderWithRouter';

const emailObj = { email: 'email@emaisl.com' };
const initialEntries = ['/profile'];

describe('Testes da tela Profile', () => {
  beforeEach(() => {
    window.localStorage.setItem('user', JSON.stringify(emailObj));
  });

  afterEach(() => window.localStorage.clear());

  test('Testa se os elementos corretos estão na página', () => {
    renderWithRouter(<App />, { initialEntries });
    // JSON.parse(localStorage.getItem('user'));

    const emailEl = screen.getByRole('heading', { level: 4 });
    const doneBtn = screen.getByRole('button', { name: /done recipes/i });
    const favoriteBtn = screen.getByRole('button', { name: /favorite recipes/i });
    const logoutBtn = screen.getByRole('button', { name: /logout/i });

    expect(emailEl).toBeInTheDocument();
    expect(emailEl).toHaveTextContent('email@emaisl.com');
    expect(doneBtn).toBeInTheDocument();
    expect(favoriteBtn).toBeInTheDocument();
    expect(logoutBtn).toBeInTheDocument();
  });

  test('Se os botões levam para as páginas corretas', () => {
    const { history } = renderWithRouter(<App />, { initialEntries });

    const doneBtn = screen.getByRole('button', { name: /done recipes/i });

    userEvent.click(doneBtn);
    expect(history.location.pathname).toBe('/done-recipes');

    const profileEl = screen.getByAltText(/ícone de perfil/i);

    userEvent.click(profileEl);
    const favoriteBtn = screen.getByRole('button', { name: /favorite recipes/i });
    userEvent.click(favoriteBtn);
    expect(history.location.pathname).toBe('/favorite-recipes');

    userEvent.click(profileEl);
    const logoutBtn = screen.getByRole('button', { name: /logout/i });
    userEvent.click(logoutBtn);
    expect(history.location.pathname).toBe('/');
  });
});
