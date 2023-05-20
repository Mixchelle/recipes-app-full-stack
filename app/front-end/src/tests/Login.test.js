import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from './helpers/renderWithRouter';

const email = 'email@email.com';
const password = 'a1234567b';

describe('Testes de login', () => {
  test('Verifica se os elementos corretos estão na tela', () => {
    renderWithRouter(<App />);

    const emailEl = screen.getByRole('textbox');
    const passwdEl = screen.getByPlaceholderText(/password/i);
    const loginBtn = screen.getByRole('button', { name: /enter/i });
    expect(emailEl).toBeInTheDocument();
    expect(passwdEl).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });

  test('Verifica se o botão inicia desabilitado e quando preenchido habilita', () => {
    renderWithRouter(<App />);

    const emailEl = screen.getByRole('textbox');
    const passwdEl = screen.getByPlaceholderText(/password/i);
    const loginBtn = screen.getByRole('button', { name: /enter/i });
    expect(loginBtn).toBeDisabled();

    userEvent.type(emailEl, email);
    userEvent.type(passwdEl, password);

    expect(loginBtn).toBeEnabled();
  });

  test('Verifica se ao clicar no botão de login, redireciona para tela principal de receitas de comidas', () => {
    const { history } = renderWithRouter(<App />);

    const emailEl = screen.getByRole('textbox');
    const passwdEl = screen.getByPlaceholderText(/password/i);
    const loginBtn = screen.getByRole('button', { name: /enter/i });

    userEvent.type(emailEl, email);
    userEvent.type(passwdEl, password);
    userEvent.click(loginBtn);
    expect(history.location.pathname).toBe('/meals');
  });
});
