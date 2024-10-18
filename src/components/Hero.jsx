import styled from 'styled-components';
import Button from './Button';
import { Link, useLocation } from 'react-router-dom';
import { mobileWidth } from '../GlobalStyles';

const HeroSection = styled.div`
  height: 600px;
  border-radius: 10px;
  background: url('/assets/home/desktop/image-hero-coffeepress.jpg');
  background-size: cover;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    background: url('/assets/home/tablet/image-hero-coffeepress.jpg');
    height: 500px;

    h1 {
      font-size: 48px;
    }

    p {
      font-size: 15px;
    }
  }

  @media (max-width: ${mobileWidth}px) {
    background: url('/assets/home/mobile/image-hero-coffeepress.jpg');

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 15px;
    }
  }
`;

const StyledHeroInfo = styled.div`
  color: var(--color-lightCream);
  width: 493px;
  margin-left: 85px;
  display: flex;
  flex-direction: column;
  gap: 56px;

  @media (max-width: 768px) {
    width: 398px;
    margin-left: 58px;
  }

  @media (max-width: ${mobileWidth}px) {
    align-items: center;
    gap: 39px;
    margin-left: 0;
    padding: 0 24px;
  }

  @media (max-width: 375px) {
    padding: 0;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  p {
    max-width: 444px;
    text-align: left;
  }

  @media (max-width: ${mobileWidth}px) {
    align-items: center;
    text-align: center;
    gap: 24px;

    h1 {
      line-height: 40px;
    }

    p {
      width: 279px;
      text-align: center;
      line-height: 25px;
    }
  }
`;

const AboutHeroSection = styled(HeroSection)`
  height: 450px;
  background: url('/assets/about/desktop/image-hero-whitecup.jpg');
  background-size: cover;

  @media (max-width: 768px) {
    height: 400px;
    background: url('/assets/about/tablet/image-hero-whitecup.jpg');

    h2 {
      font-size: 32px;
    }
  }

  @media (max-width: ${mobileWidth}px) {
    background: url('/assets/about/mobile/image-hero-whitecup.jpg');
    background-position: center;

    h2 {
      font-size: 28px;
    }
  }
`;

const PlansHeroSection = styled(AboutHeroSection)`
  background: url('/assets/plan/desktop/image-hero-blackcup.jpg');
  background-size: cover;

  @media (max-width: 768px) {
    background: url('/assets/plan/tablet/image-hero-blackcup.jpg');
  }

  @media (max-width: ${mobileWidth}px) {
    background: url('/assets/plan/mobile/image-hero-blackcup.jpg');
    background-position: center;
  }
`;

function Hero() {
  const { pathname } = useLocation();

  if (pathname === '/')
    return (
      <HeroSection>
        <StyledHeroInfo>
          <StyledDiv>
            <h1>Great coffee made simple.</h1>
            <p>
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
          </StyledDiv>
          <Link to="plans">
            <Button>Create your plan</Button>
          </Link>
        </StyledHeroInfo>
      </HeroSection>
    );

  if (pathname === '/about')
    return (
      <AboutHeroSection>
        <StyledHeroInfo>
          <StyledDiv style={{ gap: '24px' }}>
            <h2>About Us</h2>
            <p>
              Coffeeroasters began its journey of exotic discovery in 1999,
              highlighting stories of coffee from around the world. We have
              since been dedicated to bring the perfect cup - from bean to brew
              - in every shipment.
            </p>
          </StyledDiv>
        </StyledHeroInfo>
      </AboutHeroSection>
    );

  if (pathname === '/plans')
    return (
      <PlansHeroSection>
        <StyledHeroInfo>
          <StyledDiv>
            <h1>Create plan</h1>
            <p>
              Coffee the way you wanted it to be. For coffee delivered tomorrow,
              or next week. For whatever brew method you use. For choice, for
              convenience, for quality.
            </p>
          </StyledDiv>
        </StyledHeroInfo>
      </PlansHeroSection>
    );
}

export default Hero;
