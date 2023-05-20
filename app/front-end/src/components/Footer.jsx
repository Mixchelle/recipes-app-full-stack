import React, { useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import useFooter from '../hooks/useFooter';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/footer.css';

export default function Footer() {
  const { visible, setVisibility } = useFooter();
  const location = useLocation();

  useEffect(() => {
    setVisibility(location);
  }, [location, setVisibility]);

  return (
    visible && (
      <Navbar
        fixed="bottom"
        bg="success"
        variant="light"
        className="justify footer-container col-md-5 mx-auto"
      >
        <Nav.Link as={ Link } to="/drinks">
          <img
            src={ drinkIcon }
            alt="drink link button"
            data-testid="drinks-bottom-btn"
            className="icon-light"
          />
        </Nav.Link>
        <Nav.Link as={ Link } to="/meals">
          <img
            className="icon-light"
            src={ mealIcon }
            alt="meal link button"
            data-testid="meals-bottom-btn"
          />
        </Nav.Link>
      </Navbar>
    )
  );
}
