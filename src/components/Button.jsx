import styled from 'styled-components';

const StyledButton = styled.button`
  width: 217px;
  height: 56px;
  font-family: 'Fraunces', serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 25px;
  border: none;
  border-radius: 6px;
  background-color: var(--color-darkCyan);
  color: var(--color-lightCream);
  cursor: pointer;

  &:hover {
    background-color: #66d2cf;
  }

  &:disabled {
    background-color: #e2dedb;
    cursor: not-allowed;
  }
`;

function Button({ children, isDisabled, onClick }) {
  return (
    <StyledButton disabled={isDisabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
