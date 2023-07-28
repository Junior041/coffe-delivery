import { PaymentsType } from '../../@types/payments';

export enum ActionTypes {
  CREATE_NET_PAYMENT = 'CREATE_NET_PAYMENT',
}

export function addNewPayment(payment: PaymentsType) {
  return {
    type: ActionTypes.CREATE_NET_PAYMENT,
    playload: {
      payment,
    },
  };
}
