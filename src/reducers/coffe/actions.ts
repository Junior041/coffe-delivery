import { CoffeType } from '../../@types/coffe';
export enum ActionTypes {
  ADD_NEW_COFFE = 'ADD_NEW_COFFE',
  REMOVE_COFFE = 'REMOVE_COFFE',
  REMOVE_ALL_COFFE_EQUAL = 'REMOVE_ALL_COFFE_EQUAL',
}

export function addNewCoffe(coffe: CoffeType) {
  return {
    type: ActionTypes.ADD_NEW_COFFE,
    playload: { coffe },
  };
}

export function removeCoffe(coffe: CoffeType) {
  return {
    type: ActionTypes.REMOVE_COFFE,
    playload: { coffe },
  };
}

export function removeAllCoffeEqual(coffe: CoffeType) {
  return {
    type: ActionTypes.REMOVE_ALL_COFFE_EQUAL,
    playload: { coffe },
  };
}
