import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import { mobileWidth } from '../GlobalStyles';
import Footer from './Footer';

const Container = styled.div`
  /* max-width: 1280px; */
  margin: 0 80px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 0 40px;
  }

  @media (max-width: ${mobileWidth}px) {
    margin: 0 24px;
  }
`;

function AppLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default AppLayout;
