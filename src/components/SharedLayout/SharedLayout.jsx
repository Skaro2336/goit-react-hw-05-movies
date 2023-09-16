import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import LoadingSpinner from 'components/Loader';
import {
  Container,
  Header,
  Logo,
  StyledLink,
  Footer,
  Text,
} from './SharedLayoutStyles';
import { FaFilm } from 'react-icons/fa';

const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header>
          <Link to="/">
            <Logo>
              <FaFilm />
              TMDB
            </Logo>
          </Link>
          <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movie</StyledLink>
          </nav>
        </Header>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
        <Footer>
          <Text>&copy; Movie Search create by Stanislav Klymenko</Text>
        </Footer>
      </Container>
    </>
  );
};

export default SharedLayout;
