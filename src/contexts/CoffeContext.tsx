import { createContext, ReactNode, useReducer } from 'react';
import { CoffesReducer } from '../reducers/reducer';
import { CoffeType } from '../@types/coffe';
import { addNewCoffe } from '../reducers/actions';
interface CoffesContextType {
  addNewCoffeContext: (coffe: CoffeType) => void;
}

interface CoffeContextProviderProps {
  children: ReactNode;
}

export const CoffeContext = createContext({} as CoffesContextType);

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
  const [coffeState, dispatch] = useReducer(
    CoffesReducer,
    {
      coffes: [], // Estado inicial definido corretamente como um objeto com a propriedade 'coffes'
    },
    (initialState) => {
      return initialState;
    },
  );

  function addNewCoffeContext(coffe: CoffeType) {
    dispatch(addNewCoffe(coffe));
  }

  return (
    <CoffeContext.Provider value={{ addNewCoffeContext }}>
      {children}
    </CoffeContext.Provider>
  );
}
