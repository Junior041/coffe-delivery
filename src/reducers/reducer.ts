import { CoffeType } from '../@types/coffe';
interface CoffesReducer {
  coffes: CoffeType[];
}
export function CoffesReducer(state: CoffesReducer, action: any) {
  switch (action.type) {
    case 'ADD_NEW_COFFE':
      console.log(state);
      return {
        ...state,
        coffes: [...state.coffes, action.playload.coffe], // Usando state.coffes em vez de apenas state
      };
    default:
      return state;
  }
}
