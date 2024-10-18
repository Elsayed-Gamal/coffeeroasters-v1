import styled from 'styled-components';
import FooterLogo from './FooterLogo';
import { StyledNavList } from './NavList';
import { NavLink } from 'react-router-dom';
import SocialIcon from './SocialIcon';
import { mobileWidth } from '../GlobalStyles';

const StyledFooter = styled.footer`
  padding: 47px 85px;
  background-color: #2c343e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 88px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 48.5px;
    margin-bottom: 72px;
  }

  @media (max-width: 550px) {
    padding: 47px 20px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  gap: 103px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    width: 100%;
    gap: 0;
    justify-content: space-between;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 48px;
  }
`;

const FooterNavList = styled(StyledNavList)`
  li a {
    text-transform: uppercase;
  }

  li a.active {
    color: var(--color-lightCream);
  }

  li a:hover {
    color: var(--color-lightCream);
  }

  li a.active:hover {
    color: var(--color-lightCream);
  }

  @media (max-width: ${mobileWidth}px) {
    flex-direction: column;
    align-items: center;
    font-size: 12px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 24px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <LeftSection>
        <FooterLogo />
        <FooterNavList>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="plans">Create your plan</NavLink>
          </li>
        </FooterNavList>
      </LeftSection>
      <RightSection>
        <a href="#">
          <SocialIcon type="facebook" />
        </a>
        <a href="#">
          <SocialIcon type="twitter" />
        </a>
        <a href="#">
          <SocialIcon type="instagram" />
        </a>
      </RightSection>
    </StyledFooter>
  );
}

export default Footer;
