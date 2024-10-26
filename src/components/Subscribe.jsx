const subscribeOptions = [
  {
    name: 'Preferences',
    question: 'How do you drink your coffee?',
    options: [
      {
        optionName: 'Capsule',
        description: 'Compatible with Nespresso systems and similar brewers',
      },
      {
        optionName: 'Filter',
        description:
          'For pour over or drip methods like Aeropress, Chemex, and V60',
      },
      {
        optionName: 'Espresso',
        description:
          'Dense and finely ground beans for an intense, flavorful experience',
      },
    ],
  },
  {
    name: 'Bean Type',
    question: 'What type of coffee?',
    options: [
      {
        optionName: 'Single Origin',
        description:
          'Distinct, high quality coffee from a specific family-owned farm',
      },
      {
        optionName: 'Decaf',
        description:
          'Just like regular coffee, except the caffeine has been removed',
      },
      {
        optionName: 'Blended',
        description:
          'Combination of two or three dark roasted beans of organic coffees',
      },
    ],
  },
  {
    name: 'Quantity',
    question: 'How much would you like?',
    options: [
      {
        optionName: '250g',
        description:
          'Perfect for the solo drinker. Yields about 12 delicious cups.',
      },
      {
        optionName: '500g',
        description:
          'Perfect option for a couple. Yields about 40 delectable cups.',
      },
      {
        optionName: '1000g',
        description:
          'Perfect for offices and events. Yields about 90 delightful cups.',
      },
    ],
  },
  {
    name: 'Grind Option',
    question: 'Want us to grind them?',
    options: [
      {
        optionName: 'Wholebean',
        description: 'Best choice if you cherish the full sensory experience',
      },
      {
        optionName: 'Filter ',
        description:
          'For drip or pour-over coffee methods such as V60 or Aeropress',
      },
      {
        optionName: 'Cafetiére',
        description:
          'Course ground beans specially suited for french press coffee',
      },
    ],
  },
  {
    name: 'Deliveries',
    question: 'How often should we deliver?',
    options: [
      {
        optionName: 'Every week',
        description: '$7.20 per shipment. Includes free first-class shipping.',
      },
      {
        optionName: 'Every 2 weeks',
        description: '$9.60 per shipment. Includes free priority shipping.',
      },
      {
        optionName: 'Every month',
        description: '$12.00 per shipment. Includes free priority shipping.',
      },
    ],
  },
];

import styled from 'styled-components';
import Question from './Question';
import Step from './Step';
import Summary from './Summary';
import Button from './Button';
import { usePlan } from '../contexts/PlanContext';
import Modal from './Modal';
import { useState } from 'react';

const SubscribeSection = styled.section`
  display: flex;
  gap: 125px;
  margin: 0 auto;
  margin-bottom: 168px;
`;

const Questions = styled.div`
  display: flex;
  flex-direction: column;

  button {
    align-self: end;

    @media (max-width: 1240px) {
      align-self: center;
    }
  }
`;

const Steps = styled.div`
  width: 255px;

  @media (max-width: 1240px) {
    display: none;
  }
`;

function Subscribe() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    preferences,
    beanType,
    quantity,
    grindOption,
    deliveries,
    grindDisabled,
  } = usePlan();

  const isDisabled = grindDisabled
    ? !preferences || !beanType || !quantity || !deliveries
    : !preferences || !beanType || !quantity || !grindOption || !deliveries;

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      {isModalOpen && <Modal closeModal={handleCloseModal} />}
      <SubscribeSection>
        <Steps>
          {subscribeOptions.map((question, i) => (
            <Step stepNum={i + 1} name={question.name} key={i + 1} />
          ))}
        </Steps>
        <Questions>
          {subscribeOptions.map((options) => (
            <Question
              name={options.name}
              question={options.question}
              options={options.options}
              key={options.name}
            />
          ))}
          <Summary />
          <Button isDisabled={isDisabled} onClick={handleOpenModal}>
            Create my plan!
          </Button>
        </Questions>
      </SubscribeSection>
    </>
  );
}

export default Subscribe;
