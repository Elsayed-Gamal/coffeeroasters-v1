import styled from 'styled-components';

const StyledQuality = styled.section`
  background-color: #2c343e;
  height: 474px;
  margin-bottom: 168px;
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 120px;
  border-radius: 10px;

  img {
    max-width: 445px;
    height: 474px;
    object-fit: cover;
    transform: translate(-85px, -88px);
    border-radius: 8px;
  }

  @media (max-width: 1244px) {
    flex-direction: column;
    height: 488px;
    /* gap: 64px; */
    justify-content: flex-start;

    img {
      order: -1;
      max-width: 80%;
      width: 80%;
      height: 320px;
      align-self: center;
      transform: translate(0, -50%);
    }
  }

  @media (max-width: 601px) {
    height: auto;
    padding-bottom: 60px;

    img {
      height: 279px;
    }
  }
`;

const QualityInfo = styled.div`
  color: var(--color-lightCream);
  max-width: 540px;
  margin-top: 88px;
  margin-left: 85px;

  h2 {
    margin-bottom: 32px;
  }

  @media (max-width: 1244px) {
    margin: 0 auto;
    margin-top: -210px;
    text-align: center;
    max-width: 80%;

    h2 {
      font-size: 32px;
      margin-bottom: 24px;
    }

    p {
      font-size: 15px;
      line-height: 25px;
    }
  }

  @media (max-width: 601px) {
    h2 {
      font-size: 28px;
      line-height: 28px;
    }
  }
`;

function Quality() {
  return (
    <StyledQuality>
      <QualityInfo>
        <h2>Uncompromising quality</h2>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </QualityInfo>
      <img src="/assets/about/desktop/image-quality.jpg" alt="quality" />
    </StyledQuality>
  );
}

export default Quality;
