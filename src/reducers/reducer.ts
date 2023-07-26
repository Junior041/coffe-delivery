import { CoffeType } from '../@types/coffe';
import { ActionTypes } from './actions';
interface CoffesReducer {
  coffes: CoffeType[];
  numberCoffe: number;
}
export function CoffesReducer(state: CoffesReducer, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFE:
      return {
        ...state,
        coffes: [...state.coffes, action.playload.coffe],
        numberCoffe: state.numberCoffe + 1,
      };
    case ActionTypes.REMOVE_COFFE:
      return {
        ...state,
        coffes: state.coffes.filter(
          (coffe) => coffe.data !== action.playload.data,
        ),
        numberCoffe:
          state.numberCoffe > 0 ? state.numberCoffe - 1 : state.numberCoffe,
      };
    default:
      return state;
  }
}
