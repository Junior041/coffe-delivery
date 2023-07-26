import { createContext, ReactNode, useReducer } from 'react';
import { CoffesReducer } from '../reducers/reducer';
import { CoffeType } from '../@types/coffe';
import { addNewCoffe, removeCoffe } from '../reducers/actions';
interface CoffesContextType {
  coffes: CoffeType[];
  numberCoffe: number;
  addNewCoffeContext: (coffe: CoffeType) => void;
  removeNewCoffeContext: (coffe: CoffeType) => void;
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
      return initialState;
    },
  );

  function addNewCoffeContext(coffe: CoffeType) {
    dispatch(addNewCoffe(coffe));
  }

  function removeNewCoffeContext(coffe: CoffeType) {
    dispatch(removeCoffe(coffe));
  }

  const { numberCoffe, coffes } = coffeState;

  return (
    <CoffeContext.Provider
      value={{ coffes, numberCoffe, addNewCoffeContext, removeNewCoffeContext }}
    >
      {children}
    </CoffeContext.Provider>
  );
}
