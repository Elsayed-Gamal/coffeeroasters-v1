import { createContext, useContext, useEffect, useReducer } from 'react';

const PlanContext = createContext();

const initialState = {
  step: 1,
  preferences: '',
  beanType: '',
  quantity: '',
  grindOption: '',
  deliveries: '',
  grindDisabled: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'plan/changeStep':
      return { ...state, step: action.payload };
    case 'plan/changePreferences':
      return {
        ...state,
        preferences: action.payload,
        grindDisabled: action.payload === 'Capsule' ? true : false,
      };
    case 'plan/changeBeanType':
      return { ...state, beanType: action.payload };
    case 'plan/changeQuantity':
      return { ...state, quantity: action.payload };
    case 'plan/changeGrindOption':
      return { ...state, grindOption: action.payload };
    case 'plan/changeDeliveries':
      return { ...state, deliveries: action.payload };

    default:
      throw new Error('Unknown action type');
  }
}

function PlanProvider({ children }) {
  const [
    {
      step,
      preferences,
      beanType,
      quantity,
      grindOption,
      deliveries,
      grindDisabled,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(
    function () {
      if (!preferences) {
        changeStep(1);
      } else if (!beanType) {
        changeStep(2);
      } else if (!quantity) {
        changeStep(3);
      } else if (!grindOption && grindDisabled) {
        changeStep(5);
      } else if (!grindOption && !grindDisabled) {
        changeStep(4);
      } else if (!deliveries) {
        changeStep(5);
      } else {
        changeStep(5);
      }
    },
    [beanType, deliveries, grindOption, preferences, quantity]
  );

  function changeStep(step) {
    dispatch({ type: 'plan/changeStep', payload: step });
  }

  function changePreferences(preferences) {
    dispatch({ type: 'plan/changePreferences', payload: preferences });
  }

  function changeBeanType(beanType) {
    dispatch({ type: 'plan/changeBeanType', payload: beanType });
  }

  function changeQuantity(quantity) {
    dispatch({ type: 'plan/changeQuantity', payload: quantity });
  }

  function changeGrindOption(grindOption) {
    dispatch({ type: 'plan/changeGrindOption', payload: grindOption });
  }

  function changeDeliveries(deliveries) {
    dispatch({ type: 'plan/changeDeliveries', payload: deliveries });
  }

  return (
    <PlanContext.Provider
      value={{
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
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

function usePlan() {
  const context = useContext(PlanContext);
  if (context === undefined)
    throw new Error('PlanContext was used outside the PlanProvider!');
  return context;
}

export { PlanProvider, usePlan };
