import styled from 'styled-components';

const CommitmentSection = styled.section`
  max-width: 1111px;
  height: 520px;
  margin: 168px auto 256px auto;
  display: flex;
  justify-content: center;
  gap: 125px;

  @media (max-width: 1200px) {
    height: 470px;
    gap: 69px;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 48px;
    margin-right: 0;
    margin-left: 0;
    align-items: center;
    height: 900px;
    margin-top: 120px;
  }
`;

const StyledImage = styled.div`
  max-width: 445px;
  flex-shrink: 0;
  object-fit: scale-down;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }

  @media (max-width: 1200px) {
    max-width: 350px;
  }

  @media (max-width: 950px) {
    max-width: 100%;
    height: 400px;
  }
`;

const Info = styled.div`
  max-width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  color: var(--color-darkGrey);

  @media (max-width: 1200px) {
    gap: 30px;

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 15px;
      line-height: 25px;
    }
  }

  @media (max-width: 950px) {
    text-align: center;
  }
`;

function Commitment() {
  return (
    <CommitmentSection>
      <StyledImage>
        <img
          src="/assets/about/desktop/image-commitment.jpg"
          alt="commitment"
        />
      </StyledImage>
      <Info>
        <h2>Our commitment</h2>
        <p>
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </Info>
    </CommitmentSection>
  );
}

export default Commitment;
