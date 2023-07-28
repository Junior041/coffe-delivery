import { useContext } from 'react';
import { PaymentContext } from '../../contexts/PaymentContext';

export default function Obrigado() {
  const { payment } = useContext(PaymentContext);
  return (
    <div>
      <pre>{payment}</pre>
    </div>
  );
}
