import { CoffeType } from '../@types/coffe';
import { ActionTypes } from './actions';
interface CoffesReducer {
  coffes: CoffeType[];
  numberCoffe: number;
}
interface ActionCoffesReduce {
  type: string; // Replace "string" with the actual type of ActionTypes
  playload: {
    coffe: CoffeType;
  };
}
export function CoffesReducer(
  state: CoffesReducer,
  action: ActionCoffesReduce,
) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFE: {
      return {
        ...state,
        coffes: [...state.coffes, action.playload.coffe],
        numberCoffe: state.numberCoffe + 1,
      };
    }
    case ActionTypes.REMOVE_COFFE: {
      const coffeRemoveIndex = state.coffes.findIndex(
        (coffe) => coffe.id === action.playload.coffe.id,
      );

      return {
        ...state,
        coffes: state.coffes.filter((_, index) => index !== coffeRemoveIndex),
        numberCoffe:
          coffeRemoveIndex !== -1 ? state.numberCoffe - 1 : state.numberCoffe,
      };
    }
    default:
      return state;
  }
}
