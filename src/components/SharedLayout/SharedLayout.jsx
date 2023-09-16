import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import LoadingSpinner from 'components/Loader';
import {
  Container,
  Header,
  Logo,
  IconLogo,
  Links,
  Footer,
  Text,
} from './SharedLayoutStyles';

const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header>
          <Logo>
            <IconLogo />
            TMDB
          </Logo>
          <nav>
            <Links to="/">Home</Links>
            <Links to="/movies">Movie</Links>
          </nav>
        </Header>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
        <Footer>
          <Text>&copy; Movie Search</Text>
        </Footer>
      </Container>
    </>
  );
};

export default SharedLayout;
