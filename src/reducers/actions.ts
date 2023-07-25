import { CoffeType } from '../@types/coffe';
export enum ActionTypes {
  ADD_NEW_COFFE = 'ADD_NEW_COFFE',
  REMOVE_COFFE = 'REMOVE_COFFE',
}

export function addNewCoffe(coffe: CoffeType) {
  return {
    type: ActionTypes.ADD_NEW_COFFE,
    playload: { coffe },
  };
}

export function removeCoffe(coffe: CoffeType) {
  return {
    type: ActionTypes.ADD_NEW_COFFE,
    playload: { id: coffe.id },
  };
}
