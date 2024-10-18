import styled from 'styled-components';

export const StyledHowSection = styled.section`
  max-width: 1111px;
  margin: 0 auto;
  margin-bottom: 200px;
  overflow: hidden;

  h4 {
    color: var(--color-grey);
    margin-bottom: 80px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    margin: 0;
    margin-bottom: 200px;

    h4 {
      margin-bottom: 0;
    }
  }

  @media (max-width: 375px) {
    h4 {
      padding-top: 80px;
    }
  }
`;

export const Steps = styled.div`
  display: flex;
  gap: 95px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 16px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--color-paleOrange);
  }

  &::after {
    content: '';
    position: absolute;
    top: 16px;
    left: 791px;
    width: calc(100% - 791px);
    height: 1px;
    background-color: #fff;
    z-index: 1;
  }

  @media (max-width: 1111px) {
    gap: 70px;

    &::after {
      left: 617px;
      width: calc(1111px - 617px);
    }
  }

  @media (max-width: 950px) {
    gap: 10px;

    &::after {
      left: 497px;
      width: calc(1111px - 497px);
    }
  }

  @media (max-width: 768px) {
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

export const Step = styled.div`
  position: relative;
  width: 285px;
  color: var(--color-darkGrey);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 31px;
    height: 31px;
    border-radius: 50%;
    background-color: var(--color-lightCream);
    border: 2px solid var(--color-darkCyan);
    z-index: 2;
  }

  h2 {
    padding-top: 98px;
    font-size: 72px;
    line-height: 72px;
    margin-bottom: 38px;
    color: var(--color-paleOrange);
  }

  h3 {
    width: 255px;
    margin-bottom: 42px;
  }

  @media (max-width: 1111px) {
    width: 223px;
  }

  @media (max-width: 768px) {
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

function HowSection() {
  return (
    <StyledHowSection>
      <h4>How it works</h4>
      <Steps>
        <Step>
          <h2>01</h2>
          <h3>Pick your coffee</h3>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </Step>
        <Step>
          <h2>02</h2>
          <h3>Choose the frequency</h3>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </Step>
        <Step>
          <h2>03</h2>
          <h3>Receive and enjoy!</h3>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </Step>
      </Steps>
    </StyledHowSection>
  );
}

export default HowSection;
