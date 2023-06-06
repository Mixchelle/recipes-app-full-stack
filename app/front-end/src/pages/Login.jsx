/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { AuthContext } from '../context/AuthProvider';
import rockGlass from '../images/rockGlass.svg';
import layeredWaves from '../images/layeredWaves.svg';

function Login({ history }) {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const {
    btnDisabled,
    validateBtn,
    saveToLocalStorage,
  } = useContext(AuthContext);

  useEffect(() => {
    validateBtn(loginData);
  }, [loginData, validateBtn]);


  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    saveToLocalStorage(loginData.email);
    history.push('/meals');
  }, [history, saveToLocalStorage, loginData.email]);

  const handleChange = useCallback(({ target: { value, name } }) => {
    setLoginData({
      ...loginData,
      [name]: value,
    });
  }, [loginData]);

  return (
    <>
      <Container className="login-container col-md-5 mx-auto">
        <Row>
          <div className="meals">
            <object
              className="rocksGlass"
              type="image/svg+xml"
              data={ rockGlass }
            >
              Glass
            </object>
          </div>
        </Row>
        <Row>
          <h1>Login</h1>
        </Row>
        <Row>
          <Form onSubmit={ handleSubmit }>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                data-testid="email-input"
                value={ loginData.email }
                name="email"
                onChange={ handleChange }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                data-testid="password-input"
                value={ loginData.password }
                name="password"
                onChange={ handleChange }
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              data-testid="login-submit-btn"
              disabled={ btnDisabled }
            >
              Enter
            </Button>
          </Form>
        </Row>
      </Container>
      <object
        className="wave-bg"
        type="image/svg+xml"
        data={ layeredWaves }
      >
        Glass
      </object>
    </>
  );
}

Login.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Login;
