import { ReactNode, createContext, useEffect, useReducer } from 'react';
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
    { payment: {} },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        '@ignite-timer:payment-state-1.0.0',
      );
      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson);
      }

      return initialState;
    },
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(paymentState);
    localStorage.setItem('@ignite-timer:payment-state-1.0.0', stateJSON);
  }, [paymentState]);

  function addNewPaymentContext(payment: PaymentsType[]) {
    console.log(payment);
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
