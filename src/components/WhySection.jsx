import styled from 'styled-components';

const StyledWhySection = styled.section`
  width: 100%;
  height: 577px;
  background-color: #2c343e;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 351px;
  border-radius: 10px;

  @media (max-width: 1315px) {
    height: 688px;
  }

  @media (max-width: 768px) {
    padding: 100px 74px 0 74px;
  }

  @media (max-width: 700px) {
    height: 902px;
    padding: 64px 24px 0 24px;
    margin-bottom: 717px;
  }
`;

const WhyHeader = styled.div`
  max-width: 540px;
  color: var(--color-lightCream);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    h2 {
      font-size: 32px;
    }

    p {
      font-size: 15px;
    }
  }
`;

const WhyMain = styled.div`
  max-width: 1111px;
  margin-top: 86px;
  display: flex;
  gap: 30px;

  @media (max-width: 1315px) {
    max-width: 573px;
    height: 180px;
    flex-direction: column;
  }

  @media (max-width: 700px) {
    margin-top: 64px;
  }
`;

const WhyReason = styled.div`
  width: 350px;
  height: 382px;
  background-color: var(--color-darkCyan);
  color: var(--color-lightCream);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 72px 48px 0;

  img {
    margin-bottom: 56px;
    width: 72px;
    height: 72px;
  }

  h4 {
    margin-bottom: 24px;
  }

  @media (max-width: 1315px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 55px;
    padding: 41px 48px 41px 70px;

    & > div {
      text-align: left;
    }

    img {
      width: 56px;
      height: 56px;
      margin-bottom: 0;
    }

    h4 {
      margin-bottom: 16px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 72px 12px 51px 12px;
    max-width: 279px;
    height: 382px;

    & > div {
      text-align: center;
    }

    img {
      width: 72px;
      height: 72px;
      margin-bottom: 0;
    }
  }
`;

function WhySection() {
  return (
    <StyledWhySection>
      <WhyHeader>
        <h2>Why choose us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </WhyHeader>
      <WhyMain>
        <WhyReason>
          <img
            src="/assets/home/desktop/icon-coffee-bean.svg"
            alt="icon-coffee-bean"
          />
          <div>
            <h4>Best quality</h4>
            <p>
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
        </WhyReason>
        <WhyReason>
          <img src="/assets/home/desktop/icon-gift.svg" alt="icon-gift" />
          <div>
            <h4>Exclusive benefits</h4>
            <p>
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>
        </WhyReason>
        <WhyReason>
          <img src="/assets/home/desktop/icon-truck.svg" alt="icon-truck" />
          <div>
            <h4>Free shipping</h4>
            <p>
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </div>
        </WhyReason>
      </WhyMain>
    </StyledWhySection>
  );
}

export default WhySection;
