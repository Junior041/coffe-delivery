import { PaymentsType } from '../../@types/payments';
import { ActionTypes } from './actions';

interface PaymentReducer {
  payment: PaymentsType;
}
interface ActionCoffesReduce {
  type: string;
  playload: {
    payment: PaymentsType;
  };
}
export function PaymentReducer(
  state: PaymentReducer,
  action: ActionCoffesReduce,
) {
  switch (action.type) {
    case ActionTypes.CREATE_NET_PAYMENT: {
      return {
        ...state,
        payment: action.playload.payment,
      };
    }
    default:
      return state;
  }
}
