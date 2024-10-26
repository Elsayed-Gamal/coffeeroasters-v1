import { motion } from 'framer-motion';
import { Fragment, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { usePlan } from '../contexts/PlanContext';

const StyledQuestion = styled(motion.div)`
  max-width: 730px;
  min-height: 48px;
  margin-bottom: 88px;
  transition: all 1s;
  overflow: hidden;
`;

const QuestionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #83888f;
  cursor: pointer;

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 1240px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
      line-height: 28px;
    }
  }
`;

const QuestionBody = styled.div`
  display: flex;
  gap: 23px;
  margin-top: 56px;

  @media (max-width: 1240px) {
    gap: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Radio = styled.input.attrs({ type: 'radio' })`
  appearance: none;

  &:checked + label {
    background-color: var(--color-darkCyan);
    color: var(--color-lightCream);
  }
`;

const Label = styled.label`
  display: block;
  max-width: 228px;
  height: auto;
  background-color: #f4f1eb;
  color: var(--color-darkGrey);
  border-radius: 8px;
  padding: 32px 28px 84px 28px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  cursor: pointer;
  transition: all 0.1s ease-out;

  &:hover {
    background-color: var(--color-paleOrange);
    transition: all 0.1s ease-out;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 24px 25px;
    gap: 8px;
  }
`;

function Question({ name, question, options }) {
  const {
    step,
    preferences,
    beanType,
    quantity,
    grindOption,
    deliveries,
    grindDisabled,
    changePreferences,
    changeBeanType,
    changeQuantity,
    changeGrindOption,
    changeDeliveries,
  } = usePlan();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [value, setValue] = useState(
    name === 'Preferences'
      ? preferences
      : name === 'Bean Type'
      ? beanType
      : name === 'Quantity'
      ? quantity
      : name === 'Grind Option'
      ? grindOption
      : name === 'Deliveries'
      ? deliveries
      : ''
  );

  const [isOpen, setIsOpen] = useState(value ? true : false);

  const variants = {
    open: { height: 'calc-size(auto, size)' },
    closed: { height: windowWidth > 730 ? 48 : 50 },
  };

  useEffect(
    function () {
      if (name === 'Preferences' && step === 1) {
        setIsOpen(true);
      } else if (name === 'Bean Type' && step === 2) {
        setIsOpen(true);
      } else if (name === 'Quantity' && step === 3) {
        setIsOpen(true);
      } else if (name === 'Grind Option' && step === 4) {
        setIsOpen(true);
      } else if (name === 'Deliveries' && step === 5) {
        setIsOpen(true);
      }
    },
    [name, step]
  );

  useEffect(
    function () {
      if (name === 'Grind Option' && grindDisabled && isOpen) {
        setIsOpen(false);
        setValue('');
        changeGrindOption('');
      }
    },
    [changeGrindOption, grindDisabled, isOpen, name]
  );

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(
    function () {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    },
    [handleResize]
  );

  function handleChange(e) {
    setValue(e.target.value);
    if (name === 'Preferences') {
      changePreferences(e.target.value);
    } else if (name === 'Bean Type') {
      changeBeanType(e.target.value);
    } else if (name === 'Quantity') {
      changeQuantity(e.target.value);
    } else if (name === 'Grind Option') {
      changeGrindOption(e.target.value);
    } else if (name === 'Deliveries') {
      changeDeliveries(e.target.value);
    }
  }

  function handleClick() {
    if (name === 'Grind Option' && grindDisabled) return;
    setIsOpen((open) => !open);
  }

  return (
    <StyledQuestion
      initial={isOpen ? 'open' : 'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      <QuestionHead
        style={{
          opacity: name === 'Grind Option' && grindDisabled && 0.5,
          cursor: name === 'Grind Option' && grindDisabled && 'not-allowed',
        }}
        onClick={handleClick}
      >
        <h2>{question}</h2>
        {isOpen ? (
          <svg
            width="19"
            height="13"
            viewBox="0 0 19 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9488 12.5099L18.7773 9.68145L9.6816 0.585787L0.585938 9.68145L3.41436 12.5099L9.68115 6.24266L15.9488 12.5099Z"
              fill="#0E8784"
            />
          </svg>
        ) : (
          <svg width="19" height="13" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
              fill="#0E8784"
              fillRule="nonzero"
            />
          </svg>
        )}
      </QuestionHead>

      <QuestionBody>
        {options.map((option) => (
          <Fragment key={option.optionName}>
            <Radio
              name={name}
              value={option.optionName}
              id={option.optionName}
              onChange={handleChange}
              checked={value === option.optionName}
            />
            <Label htmlFor={option.optionName}>
              <h4>{option.optionName}</h4>
              <p>{option.description}</p>
            </Label>
          </Fragment>
        ))}
      </QuestionBody>
    </StyledQuestion>
  );
}

export default Question;
