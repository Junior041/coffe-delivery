import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { CoffesReducer } from '../reducers/reducer';
import { CoffeType } from '../@types/coffe';
import {
  addNewCoffe,
  removeAllCoffeEqual,
  removeCoffe,
} from '../reducers/actions';
interface CoffesContextType {
  coffes: CoffeType[];
  numberCoffe: number;
  addNewCoffeContext: (coffe: CoffeType) => void;
  removeNewCoffeContext: (coffe: CoffeType) => void;
  removeCoffesEqualContext: (coffe: CoffeType) => void;
}

interface CoffeContextProviderProps {
  children: ReactNode;
}

export const CoffeContext = createContext({} as CoffesContextType);

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
  const [coffeState, dispatch] = useReducer(
    CoffesReducer,
    {
      coffes: [],
      numberCoffe: 0,
    },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        '@ignite-timer:coffe-state-1.0.0',
      );
      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson);
      }

      return initialState;
    },
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeState);
    localStorage.setItem('@ignite-timer:coffe-state-1.0.0', stateJSON);
  }, [coffeState]);

  function addNewCoffeContext(coffe: CoffeType) {
    dispatch(addNewCoffe(coffe));
  }

  function removeNewCoffeContext(coffe: CoffeType) {
    dispatch(removeCoffe(coffe));
  }

  function removeCoffesEqualContext(coffe: CoffeType) {
    dispatch(removeAllCoffeEqual(coffe));
  }

  const { numberCoffe, coffes } = coffeState;

  return (
    <CoffeContext.Provider
      value={{
        coffes,
        numberCoffe,
        addNewCoffeContext,
        removeNewCoffeContext,
        removeCoffesEqualContext,
      }}
    >
      {children}
    </CoffeContext.Provider>
  );
}
