import styled from 'styled-components';
import Logo from './Logo';
import { useEffect, useState } from 'react';
import NavList from './NavList';

const StyleNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 43.5px 0;
`;

function NavBar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isMobile = screenWidth < 450;

  useEffect(function () {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
  });

  return (
    <StyleNavBar>
      <Logo isMobile={isMobile} />
      <NavList isMobile={isMobile} />
    </StyleNavBar>
  );
}

export default NavBar;
