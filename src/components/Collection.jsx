import styled from 'styled-components';

const StyledCollection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 71.5px;
  width: 255px;
  position: relative;

  @media (max-width: 1111px) {
    flex-direction: row;
    gap: 36px;
    justify-content: center;
    width: 573px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    max-width: 282px;
  }
`;

const CollectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  color: var(--color-darkGrey);

  @media (max-width: 1111px) {
    align-items: flex-start;
    text-align: left;
    justify-content: center;
  }

  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
  }
`;

function Collection({ image, title, text }) {
  return (
    <StyledCollection>
      <img
        style={{ width: '255px', height: '193px' }}
        src={image}
        alt={title}
      />
      <CollectionInfo>
        <h4>{title}</h4>
        <p>{text}</p>
      </CollectionInfo>
    </StyledCollection>
  );
}

export default Collection;
