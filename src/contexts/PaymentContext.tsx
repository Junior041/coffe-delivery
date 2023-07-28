import { ReactNode, createContext, useReducer } from 'react';
import { PaymentsType } from '../@types/payments';
import { PaymentReducer } from '../reducers/payment/reducer';
import { addNewPayment } from '../reducers/payment/actions';

interface PaymentContextType {
  payment: PaymentsType;
  addNewPaymentContext: (payment: PaymentsType) => void;
}
interface PaymentContextProps {
  children: ReactNode;
}

export const PaymentContext = createContext({} as PaymentContextType);

export function PaymentContextProvider({ children }: PaymentContextProps) {
  const [paymentState, dispatch] = useReducer(
    PaymentReducer,
    { payment: [] },
    (initialState) => {
      return initialState;
    },
  );

  function addNewPaymentContext(payment: PaymentsType) {
    dispatch(addNewPayment(payment));
  }

  const { payment } = paymentState;

  return (
    <PaymentContext.Provider
      value={{
        addNewPaymentContext,
        payment,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
