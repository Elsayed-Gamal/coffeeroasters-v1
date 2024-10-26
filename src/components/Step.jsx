import styled from 'styled-components';
import { usePlan } from '../contexts/PlanContext';

const StyledStep = styled.div`
  display: flex;
  gap: 28.5px;

  &:not(:first-of-type) {
    padding-top: 24px;
  }

  &:not(:last-of-type) {
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(131, 136, 143, 0.25);
  }

  h4:nth-of-type(1) {
    color: #83888f;
    opacity: 0.4;
    transition: all 0.1s ease-out;
  }

  h4:nth-of-type(2) {
    color: #333d4b;
    opacity: 0.4;
    transition: all 0.1s ease-out;
  }
`;

function Step({ stepNum, name }) {
  const { step } = usePlan();
  const isCurrentStep = step === stepNum;

  return (
    <StyledStep>
      <h4
        style={{
          color: isCurrentStep && 'var(--color-darkCyan)',
          opacity: isCurrentStep && 1,
        }}
      >
        {stepNum.toString().padStart(2, '0')}
      </h4>
      <h4
        style={{
          opacity: isCurrentStep && 1,
        }}
      >
        {name}
      </h4>
    </StyledStep>
  );
}

export default Step;
