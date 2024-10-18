import styled from 'styled-components';
import { Step, Steps, StyledHowSection } from './HowSection';

const StyledSteps = styled(StyledHowSection)`
  margin: unset;
  margin: 168px 0;
  background-color: #2c343e;
  width: 100%;
  max-width: 100%;
  padding: 100px 85px 85px 99px;
  border-radius: 10px;

  h4 {
    display: none;
  }

  @media (max-width: 530px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const Steps2 = styled(Steps)`
  &::after {
    background-color: #2c343e;
  }

  @media (max-width: 1403px) {
    gap: 70px;

    &::after {
      left: 617px;
      width: calc(1111px - 617px);
    }
  }

  @media (max-width: 1200px) {
    gap: 10px;

    &::after {
      left: 497px;
      width: calc(1111px - 497px);
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 56px;

    &::before {
      content: none;
    }

    &::after {
      content: none;
    }
  }
`;

const StyledStep = styled(Step)`
  color: var(--color-lightCream);

  @media (max-width: 1403px) {
    width: 223px;
  }

  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    &::before {
      content: none;
    }

    h2 {
      padding-top: 0;
      margin-bottom: 0;
    }

    h3 {
      max-width: 400px;
      width: auto;
      margin-bottom: 0;
      font-size: 28px;
      line-height: 32px;
    }

    p {
      font-size: 15px;
      line-height: 25px;
    }
  }
`;

function PlanSteps() {
  return (
    <StyledSteps>
      <h4>How it works</h4>
      <Steps2>
        <StyledStep>
          <h2>01</h2>
          <h3>Pick your coffee</h3>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </StyledStep>
        <StyledStep>
          <h2>02</h2>
          <h3>Choose the frequency</h3>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </StyledStep>
        <StyledStep>
          <h2>03</h2>
          <h3>Receive and enjoy!</h3>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </StyledStep>
      </Steps2>
    </StyledSteps>
  );
}

export default PlanSteps;
