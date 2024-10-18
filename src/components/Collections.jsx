import styled from 'styled-components';
import Collection from './Collection';

const collections = [
  {
    image: '/assets/home/desktop/image-gran-espresso.png',
    title: 'Gran Espresso',
    text: 'Light and flavorful blend with cocoa and black pepper for an intense experience.',
  },
  {
    image: '/assets/home/desktop/image-planalto.png',
    title: 'Planalto',
    text: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.',
  },
  {
    image: '/assets/home/desktop/image-piccollo.png',
    title: 'Piccollo',
    text: 'Mild and smooth blend featuring notes of toasted almond and dried cherry.',
  },
  {
    image: '/assets/home/desktop/image-danche.png',
    title: 'Danche',
    text: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes.',
  },
];

const CollectionSection = styled.section`
  max-width: 1111px;
  margin-top: 136px;
  margin-bottom: 200px;
  /* background-color: aqua; */
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 185px;
  line-height: 72px;
  background: linear-gradient(to bottom, #83888f 20%, #fff);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  height: 150px;
  padding-top: 36px;
  opacity: 0.4;
  text-align: center;

  @media (max-width: 1111px) {
    font-size: 96px;
    padding-top: 0;
    height: 100px;
  }

  @media (max-width: 600px) {
    font-size: 40px;
    height: 60px;
    padding-top: 0;
  }
`;

const StyledCollections = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: -25px;

  @media (max-width: 1111px) {
    flex-direction: column;
    margin-top: -40px;
  }

  @media (max-width: 600px) {
    margin-top: 40px;
  }
`;

function Collections() {
  return (
    <CollectionSection>
      <SectionTitle>our collection</SectionTitle>
      <StyledCollections>
        {collections.map(({ image, title, text }) => (
          <Collection image={image} title={title} text={text} key={title} />
        ))}
      </StyledCollections>
    </CollectionSection>
  );
}

export default Collections;
