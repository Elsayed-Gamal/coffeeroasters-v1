import styled from 'styled-components';
import { usePlan } from '../contexts/PlanContext';
import Button from './Button';
import { useCallback, useEffect } from 'react';

const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  overflow: hidden;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 540px;
  height: auto;
  background-color: #fefcf7;
  border-radius: 8px;
  overflow: hidden;

  h2 {
    padding-top: 48px;
    padding-left: 56px;
    padding-bottom: 40px;
    background-color: #333d4b;
    color: #fff;
  }

  @media (max-width: 630px) {
    width: 327px;

    h2 {
      padding-top: 28px;
      padding-bottom: 28px;
    }
  }
`;

const Summary = styled.div`
  padding: 56px;

  h4 {
    line-height: 40px;
    color: #83888f;
    margin-bottom: 7px;

    span {
      color: #0e8784;
    }
  }

  p {
    color: #333d4b;
    margin-bottom: 47px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: #333d4b;
    }

    span {
      display: none;
    }
  }

  @media (max-width: 630px) {
    padding: 40px 24px 24px 24px;

    p {
      margin-bottom: 24px;
    }

    div {
      justify-content: center;

      h3 {
        display: none;
      }

      button {
        width: 100%;

        span {
          display: inline-block;
        }
      }
    }
  }
`;

function Modal({ closeModal }) {
  const {
    preferences,
    beanType,
    quantity,
    grindOption,
    deliveries,
    grindDisabled,
  } = usePlan();

  const handleEscape = useCallback(
    (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(
    function () {
      window.addEventListener('keydown', handleEscape);

      return () => {
        window.removeEventListener('keydown', handleEscape);
      };
    },
    [handleEscape]
  );

  return (
    <StyledModal>
      <Overlay onClick={closeModal} />
      <ModalContent>
        <h2>Order Summary</h2>
        <Summary>
          {grindDisabled ? (
            <h4>
              “I drink my coffee as <span>{preferences || '_____'}</span>, with
              a <span>{beanType || '_____'}</span> type of bean.{' '}
              <span>{quantity || '_____'}</span>, sent to me{' '}
              <span>{deliveries || '_____'}</span>”
            </h4>
          ) : (
            <h4>
              “I drink my coffee as <span>{preferences || '_____'}</span>, with
              a <span>{beanType || '_____'}</span> type of bean.{' '}
              <span>{quantity || '_____'}</span> ground ala{' '}
              <span>{grindOption || '_____'}</span>, sent to me{' '}
              <span>{deliveries || '_____'}</span>”
            </h4>
          )}
          <p>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{' '}
          </p>
          <div>
            <h3>$14.00/ mo</h3>
            <Button onClick={closeModal}>
              Checkout<span> - $14.00 / mo</span>
            </Button>
          </div>
        </Summary>
      </ModalContent>
    </StyledModal>
  );
}

export default Modal;
