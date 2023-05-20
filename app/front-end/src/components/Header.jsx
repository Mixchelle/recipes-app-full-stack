import { React, useEffect, useState } from 'react';
import { Container, Navbar, Nav, Button, Collapse } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import useHeader from '../hooks/useHeader';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header() {
  const [inputVisible, setInputVisible] = useState(false);
  const location = useLocation();
  const { visible, searchVisible, pageTitle, getHeaderInfo } = useHeader();

  useEffect(() => {
    getHeaderInfo(location);
  }, [location, getHeaderInfo]);

  return (
    <>
      { visible
      && (
        <Navbar bg="primary" variant="dark" className="mb-2 col-md-5 mx-auto">
          <Container>
            <Navbar.Brand data-testid="page-title">
              { pageTitle }
            </Navbar.Brand>
            <Nav.Link as={ Link } to="/profile">
              <img
                src={ profileIcon }
                alt="Ícone de perfil"
                data-testid="profile-top-btn"
                className="icon-light"
              />
            </Nav.Link>
            { searchVisible
              && (
                <Button
                  onClick={ () => { setInputVisible(!inputVisible); } }
                  variant="primary"
                  size="sm"
                  aria-controls="collapse-search"
                  aria-expanded={ inputVisible }
                >
                  <img
                    src={ searchIcon }
                    alt="Ícone de pesquisa"
                    data-testid="search-top-btn"
                    className="icon-light"
                  />
                </Button>
              )}
          </Container>
        </Navbar>
      )}
      {/* {(inputVisible && visible) && (
        <Container
          className="mb-2"
          id="collapse-search"
        >
          <SearchBar />
        </Container>
      ) } */}
      <Collapse in={ inputVisible }>
        <Container id="collapse-search">
          { (inputVisible && searchVisible && visible) && <SearchBar /> }
        </Container>
      </Collapse>
    </>

  );
}

export default Header;
