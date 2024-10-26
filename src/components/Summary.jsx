import styled from 'styled-components';
import { usePlan } from '../contexts/PlanContext';

const StyledSummary = styled.div`
  background-color: #2c343e;
  padding: 27px 64px;
  border-radius: 10px;
  max-width: 730px;
  margin-bottom: 40px;

  p {
    color: #979797;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  h4 {
    line-height: 40px;
    color: #fff;

    span {
      color: var(--color-darkCyan);
    }
  }
`;

function Summary() {
  const {
    preferences,
    beanType,
    quantity,
    grindOption,
    deliveries,
    grindDisabled,
  } = usePlan();

  return (
    <StyledSummary>
      <p>Order Summary</p>
      {grindDisabled ? (
        <h4>
          “I drink my coffee as <span>{preferences || '_____'}</span>, with a{' '}
          <span>{beanType || '_____'}</span> type of bean.{' '}
          <span>{quantity || '_____'}</span>, sent to me{' '}
          <span>{deliveries || '_____'}</span>”
        </h4>
      ) : (
        <h4>
          “I drink my coffee as <span>{preferences || '_____'}</span>, with a{' '}
          <span>{beanType || '_____'}</span> type of bean.{' '}
          <span>{quantity || '_____'}</span> ground ala{' '}
          <span>{grindOption || '_____'}</span>, sent to me{' '}
          <span>{deliveries || '_____'}</span>”
        </h4>
      )}
    </StyledSummary>
  );
}

export default Summary;
