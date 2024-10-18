import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavList = styled.ul`
  display: flex;
  gap: 33px;
  font-weight: bold;

  li a.active {
    color: var(--color-darkCyan);
  }

  li a:hover {
    color: var(--color-darkGrey);
  }

  li a.active:hover {
    color: var(--color-darkCyan);
  }

  @media (max-width: 700px) {
    gap: 10px;
  }
`;

const MobileNavList = styled(StyledNavList)`
  width: 327px;
  height: 500px;
  position: fixed;
  top: 90px;
  background: linear-gradient(
    180deg,
    rgba(254, 252, 247, 0.6) 55%,
    rgba(0, 0, 0, 0.6) 100%
  );
  flex-direction: column;
  align-items: center;
  font-family: 'Fraunces', serif;
  font-weight: 900;
  font-size: 20px;
  line-height: 32px;
  padding-top: 40px;
  border-radius: 10px;
  gap: 33px;

  a {
    color: var(--color-darkGrey);
  }
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: var(--color-lightCream);
  opacity: 0.98;
  display: flex;
  justify-content: center;
`;

function NavList({ isMobile }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleAfterClick() {
    setIsOpen(false);
  }

  if (isMobile)
    return (
      <>
        <img
          style={{ zIndex: 10, position: 'relative' }}
          src={
            isOpen
              ? '/assets/shared/mobile/icon-close.svg'
              : '/assets/shared/mobile/icon-hamburger.svg'
          }
          alt="menu"
          onClick={() => setIsOpen((open) => !open)}
        />

        {isOpen && (
          <Modal>
            <MobileNavList>
              <li>
                <NavLink to="/" onClick={handleAfterClick}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="about" onClick={handleAfterClick}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="plans" onClick={handleAfterClick}>
                  Create your plan
                </NavLink>
              </li>
            </MobileNavList>
          </Modal>
        )}
      </>
    );

  return (
    <StyledNavList>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="plans">Create your plan</NavLink>
      </li>
    </StyledNavList>
  );
}

export default NavList;
